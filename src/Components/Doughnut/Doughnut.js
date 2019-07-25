import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

const data = {
	labels: [
		'Matilda',
		'Phantom of the Opera',
		'Cinderella'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#84FF00',
		'#FFC900',
		'#0083FF'
		],
		hoverBackgroundColor: [
		'#0083FF',
		'#84FF00',
		'#FFC900'
		],
		borderColor: [ 
		'#000',
		'#000',
		'#000'
		 ]
	}]
};

const Donut = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: left;
width: 49vw;
background: RGBA(0, 0, 0, 0.3);
padding: 20px;
margin: 2px;
overflow: hidden;
`

// const DoughnutGraph = (props) => {
//     return(
//         <Doughnut />
//     )
// }

export default class DoughnutData extends Component {

  render() {
    return (
      <div>
            <Donut>
                <Doughnut data={data} />
            </Donut>
      </div>
    );
  }
};
