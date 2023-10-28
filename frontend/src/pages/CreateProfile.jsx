import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { db } from "../firebaseConfig";
import { set, ref } from "firebase/database";
import { useParams } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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

const Form = styled.form`
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: center;
  opacity: 0.9;
  padding:50px;

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
  font-weight: 400;
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
  color: #000;
  text-transform: uppercase;
  margin-top: 50px;

  &:hover {
    font-weight: 600;
  }
`;

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

const CreateProfile = () => {
  // Assume userId is available
  const userId = useParams();
  console.log(userId);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      }
    });

    return () => unsubscribe();
  }, []);

  const navigate = useNavigate();

  const saveUserData = (userId, userData) => {
    if (typeof userId === "string" && userId.length > 0) {
      const userRef = ref(db, `users/${userId}`);
      set(userRef, userData)
        .then(() => {
          console.log("User data saved successfully");
        })
        .catch((error) => {
          console.error("Failed to save user data", error);
        });
    } else {
      console.error("Invalid userId");
    }
  };

  // Initialize state variables
  const [legalName, setLegalName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const userData = {
  //     legalName,
  //     phoneNumber,
  //     dob,
  //   };

  //   saveUserData(userId, userData);

  //   // Redirect to Create Profile page
  //   navigate('/createaddr');
  // };

  // Usage:
  const handleSubmit = (e) => {
    e.preventDefault();
    const uuid = userId; // Make sure this is valid and obtained correctly
    const userData = {
      name: legalName,
      //   get the email from the user object
      //   email: user,
      email: email,
      phoneNumber: phoneNumber,
      dob: dob,
      // other fields
    };

    saveUserData(uuid.userId, userData);
    // Redirect to Create Profile page
    navigate(`/createaddr/${uuid.userId}`);
  };

  return (
    <Container>
      {/* ... (No changes here) */}
      <Form onSubmit={handleSubmit}>
        {" "}
        {/* <-- Add onSubmit handler */}
        <Title>Create Profile</Title>
        <Input
          placeholder="Legal Name"
          value={legalName}
          onChange={(e) => setLegalName(e.target.value)}
        />
        <Input
          placeholder="555-555-5555"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        {/* <Button>Connect Wallet</Button> */}
        <Button type="submit">Next</Button> {/* <-- Change to type "submit" */}
        <UnStyledLink to="/login">Login</UnStyledLink>
      </Form>
    </Container>
  );
};

export default CreateProfile;
