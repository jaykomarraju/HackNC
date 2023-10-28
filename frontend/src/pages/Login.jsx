import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Login = () => {
  return (
    <Container>
      <BackgroundImage src={require("../assets/BackgroundEmailLanding.png")} />

      <Form>
        <Title>EquiB</Title>
        <Subtitle>
          Creating Financial Freedom for the Unbanked: EquiB's Decentralized
          Wallet with Checking and Savings
        </Subtitle>
        <Input placeholder="Email Address" />
        <PasswordInput placeholder="Password" type="password" />
        {/* <Button>Connect Wallet</Button> */}
        <LinkButton to="/checking">Login</LinkButton>
        <UnStyledLink to="/">Sign Up</UnStyledLink>
      </Form>
    </Container>
  );
};

export default Login;
