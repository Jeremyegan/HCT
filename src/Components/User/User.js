import React from 'react';
import TaskDisplay from '../TaskDisplay/TaskDisplay';
import Chart from '../Chart/Chart';
import LineData from '../Bar/Bar';
import styled from 'styled-components';
import Nav from '../Nav/Nav';

const ChartContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin: 50px 0px;

`




export default function User() {

    return (
        <>
        <Nav />
        <div>
            <ChartContainer>
                    <Chart /><LineData /><br />
            </ChartContainer>
                <TaskDisplay />
        </div>
        </>
    );
    
}