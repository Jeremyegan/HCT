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
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const Donut = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: left;
width: 49vw;
border: 3px dashed pink;
margin: 2.5px;
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
