import requests
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP
from Crypto.Hash import SHA256
import binascii
import base64
import uuid
import json
import os


API_KEY = 'TEST_API_KEY:cbb73aa42bb8f19d511cbeb1fb67891d:33634f7145db17bb407cbeaf3a9ac846'

headers = {
    'Authorization': f'Bearer {API_KEY}',
}


headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}

def fetch_public_key():
    try:
        response = requests.get(
            "https://api.circle.com/v1/w3s/config/entity/publicKey",
            headers=headers
        )
        response.raise_for_status()
        return response.json()['data']['publicKey']
    except requests.RequestException as e:
        raise RuntimeError(f"Failed to fetch public key: {e}")

def encrypt_entity_secret(entity_secret_hex):
    try:
        public_key_pem = fetch_public_key()
        public_key = RSA.import_key(public_key_pem)
        cipher = PKCS1_OAEP.new(public_key, hashAlgo=SHA256, mgfunc=lambda x, y: PKCS1_OAEP.MGF1(x, y, SHA256))
        encrypted = cipher.encrypt(binascii.unhexlify(entity_secret_hex))
        return base64.b64encode(encrypted).decode('utf-8')
    except (ValueError, TypeError, binascii.Error) as e:
        raise RuntimeError(f"Failed to encrypt entity secret: {e}")

def create_wallet_set(encrypted_entity_secret):
    try:
        idempotency_key = str(uuid.uuid4())
        print(f"Creating wallet set with idempotency key: {idempotency_key}")
        print(f"Encrypted entity secret: {encrypted_entity_secret}")
        response = requests.post(
            "https://api.circle.com/v1/w3s/developer/walletSets",
            json={
                'idempotencyKey': idempotency_key,
                'name': 'Entity WalletSet A',
                'entitySecretCiphertext': encrypted_entity_secret
            },
            headers=headers
        )
        response.raise_for_status()
        return response.json()['data']['walletSet']['id']
    except requests.RequestException as e:
        raise RuntimeError(f"Failed to create wallet set: {e}")

def create_wallet(wallet_set_id, encrypted_entity_secret):
    try:
        idempotency_key = str(uuid.uuid4())
        response = requests.post(
            "https://api.circle.com/v1/w3s/developer/wallets",
            json={
                'idempotencyKey': idempotency_key,
                'blockchains': ['MATIC-MUMBAI'],
                'count': 5,
                'entitySecretCiphertext': encrypted_entity_secret,
                'walletSetId': wallet_set_id
            },
            headers=headers
        )
        response.raise_for_status()
        return response.json()['data']['wallets'][0]['id']
    except requests.RequestException as e:
        raise RuntimeError(f"Failed to create wallet: {e}")

def create_wallet_flow(entity_secret_hex):
    try:
        print("Starting wallet creation process")
        encrypted_entity_secret = encrypt_entity_secret(entity_secret_hex)
        print(f"Entity secret: {entity_secret_hex}")
        print(f"Encrypted entity secret: {encrypted_entity_secret}")

        wallet_set_id = create_wallet_set(encrypted_entity_secret)
        print(f"Created wallet set with ID: {wallet_set_id}")

        secret2 = '6c11d66a4a891ed1ba48a014306cfb889c87f96323ee2f15051c6e15bc224072'
        encrypted_entity_secret2 = encrypt_entity_secret(secret2)
        wallet_id = create_wallet(wallet_set_id, encrypted_entity_secret2)
        print(f"Created wallet with ID: {wallet_id}")

        return {'success': True, 'walletId': wallet_id}
    except Exception as e:
        print(f"Error creating wallet: {str(e)}")
        return {'success': False, 'error': str(e)}

if __name__ == "__main__":
    entity_secret = "6c11d66a4a891ed1ba48a014306cfb889c87f96323ee2f15051c6e15bc224072"  # Replace with your actual entity secret in hex
    secret = os.urandom(32).hex()

    result = create_wallet_flow(entity_secret)
    print(json.dumps(result, indent=2))
