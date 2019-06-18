import React from 'react';
import TaskDisplay from '../TaskDisplay/TaskDisplay';
import Chart from '../Chart/Chart';
import LineData from '../Bar/Bar';
import styled from 'styled-components';


const ChartContainer = styled.div`
box-sizing: border-box;
height: 53vh;
width: 100%;
border: 2px dashed green;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 0;


`


export default function User() {

    return (
        <div>
            <ChartContainer>
                <Chart /><LineData />
            </ChartContainer>
            <div>
                <TaskDisplay />
            </div>
        </div>
    );
    
}