const functions = require("firebase-functions");
const axios = require("axios");
const crypto = require("crypto");
const forge = require("node-forge");
const uuidv4 = require("uuid").v4;
const { log, info, debug, warn, error } = require("firebase-functions/logger");

async function fetchPublicKey() {
  const response = await axios.get(
    "https://api.circle.com/v1/w3s/config/entity/publicKey",
    {
      headers: {
        Authorization: `Bearer TEST_API_KEY:cbb73aa42bb8f19d511cbeb1fb67891d:33634f7145db17bb407cbeaf3a9ac846`,
      },
    }
  );
  return response.data.data.publicKey;
}

// function generateEntitySecret() {
//   return crypto.randomBytes(32).toString("hex");
// }

function encryptEntitySecret(entitySecret, publicKeyPem) {
  const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
  const encrypted = publicKey.encrypt(
    forge.util.hexToBytes(entitySecret),
    "RSA-OAEP",
    {
      md: forge.md.sha256.create(),
      mgf1: {
        md: forge.md.sha256.create(),
      },
    }
  );
  return forge.util.encode64(encrypted);
}

// const encryptedData = publicKey.encrypt(entitySecret, 'RSA-OAEP', {
//     md: forge.md.sha256.create(),
//     mgf1: {
//       md: forge.md.sha256.create(),
//     },
//   })

async function createWalletSet(encryptedEntitySecret) {
  const idempotencyKey = uuidv4(); // Generate a unique idempotency key
  const response = await axios.post(
    "https://api.circle.com/v1/w3s/developer/walletSets",
    {
      idempotencyKey: idempotencyKey,
      name: "Entity WalletSet A",
      entitySecretCiphertext: encryptedEntitySecret,
    },
    {
      headers: {
        Authorization: `Bearer TEST_API_KEY:cbb73aa42bb8f19d511cbeb1fb67891d:33634f7145db17bb407cbeaf3a9ac846`,
      },
    }
  );
  return response.data.data.walletSet.id;
}

async function createWallet(walletSetId, encryptedEntitySecret) {
  const idempotencyKey = uuidv4(); // Generate another unique idempotency key
  const response = await axios.post(
    "https://api.circle.com/v1/w3s/developer/wallets",
    {
      idempotencyKey: idempotencyKey,
      blockchains: ["MATIC-MUMBAI"],
      count: 2,
      entitySecretCiphertext: encryptedEntitySecret,
      walletSetId: walletSetId,
    },
    {
      headers: {
        Authorization: `Bearer  TEST_API_KEY:cbb73aa42bb8f19d511cbeb1fb67891d:33634f7145db17bb407cbeaf3a9ac846`,
      },
    }
  );
  return response.data.data.wallets[0].id;
}

exports.createWallet = functions.https.onCall(async (data, context) => {
  try {
    info("Starting wallet creation process");

    

    const entitySecret = data.entitySecret;  // Assuming the key in data is 'entitySecret'
    if (!entitySecret) {
      throw new Error("Entity secret is not provided");
      
    }
    info("Received entity secret:", entitySecret);

    const publicKey = await fetchPublicKey();
    info("Fetched public key:", publicKey);

    const encryptedEntitySecret = encryptEntitySecret(entitySecret, publicKey);
    info("Encrypted entity secret:", encryptedEntitySecret);

    const walletSetId = await createWalletSet(encryptedEntitySecret);
    info("Created wallet set with ID:", walletSetId);

    const walletId = await createWallet(walletSetId, encryptedEntitySecret);
    info("Created wallet with ID:", walletId);

    // Store walletId in Firebase against the user's Firebase userId

    return { success: true, walletId: walletId };
  } catch (error) {
    console.error("Error creating wallet:", error);
    if (error.response && error.response.data) {
      console.error("Axios Error details: ", error.response.data);
      
    }
    return {
      success: false,
      error: error.toString(),
      details: error.response ? error.response.data : null,
    };
  }
});
