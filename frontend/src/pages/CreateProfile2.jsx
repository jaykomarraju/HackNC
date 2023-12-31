import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { update, ref, child } from "firebase/database";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
  background-color: #7bafd4;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;


  // @media (max-width: 768px) {
  //   height: 100%;
  // }


`;

const CenterWrapper = styled.div`
position: absolute;
width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Form = styled.form`
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.9;
  padding:50px;
  width: 40%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  
  @media (max-width: 768px) {
    width: 60%;

`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #000000;
  padding-left: 10px;
  font-size: 20px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Button = styled.button`
  width: 80%;
  height: 40px;
  margin-top: 40px;
  border-radius: 40px;
  border: 1.5px solid #000000;
  background-color: #fff;

  cursor: pointer;
  color: #000;
  font-size: 20px;
  font-weight: 400;


  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 70%;
    font-size: 16px;
  }

`;

const LinkButton = styled(Link)`
  width: 80%;
  height: 40px;
  margin-top: 40px;
  border-radius: 40px;
  border: 1.5px solid #000000;
  background-color: #fff;
  text-decoration: none;

  color: #000;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 70%;
    font-size: 16px;
  }

`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 0;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 400  ;
  color: #000;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: #000;
  margin-top: 20px;
  text-align: center;
`;

const UnStyledLink = styled(Link)`
  text-decoration: none;
color:#000;
text-transform: uppercase;
margin-top: 50px;

&:hover {
  font-weight: 600;
}


`


const PasswordInput = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #000000;
  padding-left: 10px;
  font-size: 20px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const CreateProfile2 = () => {
    const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  const { userId } = useParams();  // Fetch userId from params

  const navigate = useNavigate();

  


  const updateUserAddress = (userId, addressData) => {
    if (typeof userId === "string" && userId.length > 0) {
      const userRef = ref(db, `users/${userId}`);
      update(userRef, { address: addressData })  // Update only the 'address' field
        .then(() => {
          console.log("User address updated successfully");
        })
        .catch((error) => {
          console.error("Failed to update user address", error);
        });
    } else {
      console.error("Invalid userId");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const addressData = {
      address1,
      address2,
      city,
      state,
      zip,
      country
    };

    updateUserAddress(userId, addressData);  // Update address in the database

    // Redirect to the user profile page
    // navigate(`/profile/${userId}`);
    navigate(`/profile`);


  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}> {/* Add onSubmit handler here */}
        {/* ... (rest of your code) */}
        <Input placeholder="Address Line 1" value={address1} onChange={(e) => setAddress1(e.target.value)} />
        <Input placeholder="Address Line 2" value={address2} onChange={(e) => setAddress2(e.target.value)} />
        <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
        <Input placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
        <Input placeholder="Zip Code" value={zip} onChange={(e) => setZip(e.target.value)} />
        <Input placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
        <Button type="submit">Sign Up</Button> {/* Change to type "submit" */}
      </Form>
    </Container>
  );
};

export default CreateProfile2;
