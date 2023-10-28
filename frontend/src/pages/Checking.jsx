import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BottomNavBar from "../components/BottomNavBar";

const Container = styled.div`
  background-color: #fff;
  width: 100vw;
  min-height: 100vh;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
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
  border:1.5px solid black;
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

const ActivityContainer = styled.div`
  width: 80%;
  // height: 100px;
  // background-color: #7bafd4;
  border:1.5px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
`;

const ActivityHeading = styled.h2`
  font-size: 30px;
  align-self: flex-start;
`;

const ActivityTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  margin-top: 20px;
`;

const ActivityTableHeaders = styled.th`
  // border: 1px solid #000000;
  padding: 10px;
`;

const ActivityTableData = styled.td`
  padding: 10px;
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

const ButtonFlexer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;

  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`

  width: 40%;
  height: 40px;
  margin-top: 40px;

  border-radius: 40px;
  border: 1.5px solid #000000;
  background-color: #fff;
  font-size: 20px;
  // font-weight: bold;
  color: #000000;
  cursor: pointer;


  &:hover {
    background-color: #000000;
    color: #fff;
  }

`;


const Checking = () => {
  // const [balance, setBalance] = useState(0);
  // const [activity, setActivity] = useState([]);

  // const getBalance = async () => {
  //   const response = await fetch("http://localhost:3000/balance");
  //   const data = await response.json();
  //   setBalance(data.balance);
  // };

  // const getActivity = async () => {
  //   const response = await fetch("http://localhost:3000/activity");
  //   const data = await response.json();
  //   setActivity(data.activity);
  // };

  // useEffect(() => {
  //   getBalance();
  //   getActivity();
  // }, []);

  const balance = 200.00;
  const activity = [
    ['10-7-2023', '0x56...63a4', 'Credit', '100.00', "300.00"],
    ['10-7-2023', '0xs4...8sf5', 'Debit', '100.00', "200.00"],
    ['10-6-2023', '0xp0...92gs', 'Credit', '100.00', "300.00"],
    ['10-5-2023', '0x95...780a', 'Credit', '100.00', "400.00"],
  ]

  return (
    <Container>
      <BottomNavBar/>
      <CenterWrapper>
      <PageTitle>Checking</PageTitle>
      <BalanceDisplayContainer>
        <BalanceHeading>Balance</BalanceHeading>
        <BalanceAmount>${balance}</BalanceAmount>
      </BalanceDisplayContainer>
      <ButtonFlexer>
        <Button>Send</Button>
        <Button>Receive</Button>
        </ButtonFlexer>
      <ActivityContainer>
        <ActivityHeading>Activity</ActivityHeading>
        <ActivityTable>
          <thead>
            <tr>
              <ActivityTableHeaders>Date</ActivityTableHeaders>
              <ActivityTableHeaders>Recipient</ActivityTableHeaders>
              <ActivityTableHeaders>Type</ActivityTableHeaders>
              <ActivityTableHeaders>Amount</ActivityTableHeaders>
              <ActivityTableHeaders>Balance</ActivityTableHeaders>
            </tr>
          </thead>
          <tbody>
            {activity.map((transaction) => {
              return (
                <tr>
                  <ActivityTableData>{transaction[0]}</ActivityTableData>
                  <ActivityTableData>{transaction[1]}</ActivityTableData>
                  <ActivityTableData>{transaction[2]}</ActivityTableData>
                  <ActivityTableData>{transaction[3]}</ActivityTableData>
                  <ActivityTableData>{transaction[4]}</ActivityTableData>
                </tr>
              );
            })}
          </tbody>
        </ActivityTable>
      </ActivityContainer></CenterWrapper>
    </Container>
  );

};

export default Checking;
