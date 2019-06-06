import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Navbar = styled.div`
width: 100%;
height: 50px;
background: black;
display: flex;
flex-direction: row;
justify-content: space-around;
align-content: center;
`;

const Links = styled(Link)`
color: white;
font-size: 20px;
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