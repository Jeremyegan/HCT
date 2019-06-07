import React from 'react';
import Tasks from './../Tasks/Tasks';
import Cloths from './../Cloths/Cloths';
import styled from 'styled-components';

const Dude = styled.body`
background: black;
`

export default function Home() {
    return (
        <Dude>
            <Cloths></Cloths>
            <Tasks />
        </Dude>
    )
}