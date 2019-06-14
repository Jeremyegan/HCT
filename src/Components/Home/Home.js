import React from 'react';
import TaskDisplay from './../TaskDisplay/TaskDisplay';
import Cloths from './../Cloths/Cloths';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Title = styled.h1`
    font-family: "Gill Sans", sans-serif;
    font-size: 60px;
    font-weight: 600;
    z-index: 10;
    color: white;
    position: absolute;
    top: 50px;
    left: 80px;
`

export default function Home() {
    return (
        <div>
            <Link to='/login'><Title>Login</Title></Link>
            <Cloths></Cloths>
            <TaskDisplay />
        </div>
    )
}