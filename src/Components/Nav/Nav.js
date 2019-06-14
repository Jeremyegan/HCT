import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';


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
const Button = styled.button`
background-color: black;
color: white;
border: none;
height: 100%;
display: flex;
flex-direction: row;
justify-content: top;
font-size: 25px;
font-weight: 800;
font-family: sans-serif;
margin: -13px;
text-decoration: none;
`



export default class Nav extends Component {

    handleClick = () => {
        axios.get('/auth/logout')
    }
    
    render() {
        return (
            <Navbar>
                <Links to="/">Home</Links>
                <Links to='/user'>User</Links>
                <Links to="/inventory">Inventory</Links>
                <Links to="/"><Button onClick={this.handleClick}>Logout</Button></Links>
            </Navbar>
        )}
}