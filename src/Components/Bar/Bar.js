import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const data = {
	labels: [
		'Matilda',
		'Phantom of the Opera',
        'Cinderella',
        'Wait Until Dark',
        'Wizard of Oz'
	],
	datasets: [{
		data: [300, 110, 200, 50, 450],
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

const Linez = styled.div`
box-sizing: border-box;
border: 3px dashed pink;
width: 49vw;
margin: 2.5px;
`

// const DoughnutGraph = (props) => {
//     return(
//         <Doughnut />
//     )
// }

export default class LineData extends Component {

  render() {
    return (
      <div>
            <Linez>
                <Line data={data} />
            </Linez>
      </div>
    );
  }
};
