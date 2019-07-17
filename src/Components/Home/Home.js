import React from 'react';

// import Cloths from './../Cloths/Cloths';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Title = styled.h1`
    font-family: "Gill Sans", sans-serif;
    font-size: 60px;
    font-weight: 600;
    z-index: 10;
    color: white;
    position: absolute;
    top: 2em;
    left: 5em;

@keyframes(768 x 1024) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 80px;

}
`


export default function Home() {
    return (
        <div height="100%" width="100%">

            <Chairs alt="background" src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80" />
            <Link to='/login'><Title>Login</Title></Link>
        </div>
    )
}