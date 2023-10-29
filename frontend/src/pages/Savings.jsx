import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BottomNavBar from "../components/BottomNavBar";


const Container = styled.div`
  background-color: #fff;
  width: 100vw;
  min-height: 100vh;
  margin-bottom:80px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const BalanceDisplayContainer = styled.div`
  width: 80%;
  // height: 100px;
  // background-color: #7bafd4;
  border: 1.5px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

const BalanceHeading = styled.h2`
  font-size: 30px;
  font-weight: 400;
`;

const BalanceAmount = styled.h2`
  font-size: 30px;
`;

const InterestInformationContainer = styled.div`
  width: 80%;
  // height: 100px;
  // background-color: #7bafd4;
  border: 1.5px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
`;

const InterestHeading = styled.h2`
  font-size: 30px;
  font-weight: 400;
  align-self: flex-start;
`;

const InterestAPRDisplay = styled.div`
  display: flex;
  flex-direction: row;
  // background:lightgreen;
  align-items: center;

  // padding: 20px;
`;

const InterestAPRHeading = styled.h2`
  font-size: 20px;
  font-weight: 400;
  padding-right: 20px;
`;

const InterestAPRAmount = styled.h2`
  font-size: 30px;
  font-weight: 400;
`;

const InterestEarnedDisplay = styled.div`
  display: flex;
  flex-direction: row;
  // background:lightgreen;
  align-items: center;

`;

const InterestEarnedHeading = styled.h2`
  font-size: 20px;
  font-weight: 400;
  padding-right: 20px;
`;

const InterestEarnedAmount = styled.h2`
  font-size: 30px;
`;

const Button = styled.button`
  width: 80%;
  height: 40px;
  margin-top: 40px;
  border-radius: 40px;
  font-size: 20px;
  margin:40px;
  border: 1.5px solid #000000;
  background-color: #fff;

  &:hover {
    background-color: #000;
    color: #fff;
  }

`;

const ButtonFlexer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

const Savings = () => {
  return (
    <Container>
      <BottomNavBar />
      <CenterWrapper>
      <PageTitle>Savings</PageTitle>
      <BalanceDisplayContainer>
        <BalanceHeading>Balance:</BalanceHeading>
        <BalanceAmount>$1,000</BalanceAmount>
      </BalanceDisplayContainer>
      <InterestInformationContainer>
        <InterestHeading>Interest Information:</InterestHeading>
        <InterestAPRDisplay>
          <InterestAPRHeading>APR:</InterestAPRHeading>
          <InterestAPRAmount>3.25%</InterestAPRAmount>
        </InterestAPRDisplay>
        <InterestEarnedDisplay>
          <InterestEarnedHeading>Interest Earned:</InterestEarnedHeading>
          <InterestEarnedAmount>$2.02</InterestEarnedAmount>
        </InterestEarnedDisplay>
      </InterestInformationContainer>
      <ButtonFlexer>
        <Button>Deposit</Button>
        <Button>Withdraw</Button>
      </ButtonFlexer></CenterWrapper>
    </Container>
  );
};

export default Savings;
