import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

// This is supposed to be a bottom navigation bar that is position fixed to the bottom center of the screen
// This is the general design:
// There are 3 icons on the bottom of the screen: Profile, Checking and Savings
// The icons are stored in a flexed row
// Images for the icons are available in the assets folder: ../assets/profile.png, ../assets/checking.png, ../assets/savings.png
// The background color of the icons is #7bafd4

const NavBar = styled.div`
    // background-color: #ededed;
    width:200px;
    // width: 100vw;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    margin-bottom: 20px;
    border-radius: 20px;
    `;

    const Icon = styled.img`
    width: 50px;
    // height: 50px;
    `;

    const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #7bafd4;
    border-radius: 20px;
    width: 80px;
    height: 80px;
    justify-content: center;
    margin: 0 10px;

    &:hover {
        transform: scale(1.1);
        transition: transform 0.5s ease;
    }
    `;


const BottomNavBar = () => {
  return (
    <NavBar>
        
       
           
            <Link to="/profile"> <IconContainer><Icon src={require("../assets/profile.png")}/></IconContainer> </Link>
            <Link to="/checking"> <IconContainer><Icon src={require("../assets/checking.png")}/></IconContainer> </Link>
            <Link to="/savings"> <IconContainer><Icon src={require("../assets/savings.png")}/></IconContainer> </Link>
        </NavBar>
  )
}

export default BottomNavBar