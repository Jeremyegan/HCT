import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Navbar = styled.div`
width: 100vw;
height: 6em;
background: black;
display: flex;
flex-direction: row;
justify-content: space-around;
align-content: center;
`;

const Links = styled(Link)`
color: white;
font-size: 25px;
font-weight: 800;
font-family: sans-serif;
margin: 20px;
text-decoration: none;
`



export default function Nav() {
    return (
        <Navbar>
            <Links to="/">Home</Links>
            <Links to="/inventory">Inventory</Links>
            <Links to="/Login">Login</Links>
        </Navbar>
    )
}