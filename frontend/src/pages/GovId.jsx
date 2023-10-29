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

const GovId = () => {

  const { userId } = useParams();  // Fetch userId from params

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // test
    e.preventDefault();
    console.log("Submit");
    // test
  }

  

  return (
    <Container>
      <Form onSubmit={handleSubmit}> {/* Add onSubmit handler here */}
        <Title>Upload Government ID</Title>
        {/* ... (rest of your code) */}
        <Input type="file" />
        <Button type="submit">Sign Up</Button> {/* Change to type "submit" */}
      </Form>
    </Container>
  );
};

export default GovId;
