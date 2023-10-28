import React from "react";
import styled from "styled-components";
import BottomNavBar from "../components/BottomNavBar";

const Container = styled.div`
  background-color: #fff;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
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

const PageTitle = styled.h1`
  font-size: 40px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const TopFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  border: 1.5px solid black;
  border-radius: 20px;
  padding: 20px;
`;

const TopRightFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 50%;
`;

const ProfilePicture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const LegalNameLabel = styled.h2`
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
`;

const LegalName = styled.h2`
  font-size: 24px;
  margin: 0;
  font-weight: 500;
`;

const EmailLabel = styled.h2`
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
`;
const Email = styled.h2`
  font-size: 24px;
  margin: 0;
  font-weight: 500;
`;

// make the bottom flex a grid with 3 elements per row
const BottomFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  margin-top: 20px;
  grid-gap: 20px;
  border: 1.5px solid black;
  border-radius: 20px;
  padding: 20px;

`;

const Label = styled.h2`
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;

`;

const Info = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;

const RightTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  // justify-content: space-between;
  margin-top: 20px;
  // background:pink;
  padding: 10px;
`;

const Profile = () => {
  return (
    <Container>
      <BottomNavBar/>
      <PageTitle>Profile</PageTitle>
      <TopFlex>
        <ProfilePicture
          src="https://via.placeholder.com/200"
          alt="Profile Picture"
        />
        <TopRightFlex>
          <LegalNameLabel>Legal Name</LegalNameLabel>
          <LegalName>John Doe</LegalName>
          <EmailLabel>Email</EmailLabel>
          <Email>john.doe@gmail.com</Email>
        </TopRightFlex>
      </TopFlex>
      <BottomFlex>
        <RightTextDiv>
        <Label>Phone Number</Label>
        <Info>555-555-5555</Info></RightTextDiv>
        <RightTextDiv>
        <Label>Address</Label>
        <Info>123 Main St. Anytown, USA 12345</Info></RightTextDiv>
        <RightTextDiv>
        <Label>Date of Birth</Label>
        <Info>01/01/2000</Info></RightTextDiv>
        <RightTextDiv>
        <Label>Wallet Address for Checking</Label>
        <Info>0x1234567890</Info></RightTextDiv>
        <RightTextDiv>
        <Label>Wallet Address for Savings</Label>
        <Info>0x1234567890</Info></RightTextDiv>
        <RightTextDiv>
        <Label>Account Active Since</Label>
        <Info>01/01/2020</Info></RightTextDiv>
      </BottomFlex>
    </Container>
  );
};

export default Profile;
