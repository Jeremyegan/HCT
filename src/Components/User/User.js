import React from 'react';
import TaskDisplay from '../TaskDisplay/TaskDisplay';
import Chart from '../Chart/Chart';
import LineData from '../Bar/Bar';
import styled from 'styled-components';
import Nav from '../Nav/Nav';


const UserContainer = styled.div`

`

const ChartContainer = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: space-around;
margin: 50px 0px;
`




export default function User() {

    return (
        <>
        <Nav />
        <UserContainer>
            <ChartContainer>
                    <Chart /><LineData /><br />
            </ChartContainer>
                <TaskDisplay />
        </UserContainer>
        </>
    );
    
}