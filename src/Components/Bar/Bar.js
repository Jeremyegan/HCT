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
		'#84FF00',
		'#36A2EB',
		'#FFCE56',
		'#56CB43',
		'#34B3TD'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		pointBackgroundColor: [
		'#34B3TD'
		]
	}]
}

const Linez = styled.div`
box-sizing: border-box;
background: RGBA(0, 0, 0, 0.3);
padding: 20px;
width: 49vw;
margin: 2px;
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
