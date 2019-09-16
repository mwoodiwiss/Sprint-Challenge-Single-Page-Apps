import React from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const NavBar = styled.div `
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
`
const Nav = styled(NavLink)`
    font-size: 1.5rem;
    color:black;
    text-decoration: none;    
`

export default function TabNav() {

    return(
    <NavBar>
        <Nav exact to={`/`}>Home</Nav>
        <Nav to={`/characters`}>Character</Nav>
        <Nav to={`/locations`}>Location</Nav>
        <Nav to={`/episodes`}>Episodes</Nav>
    </NavBar>
    )
};
