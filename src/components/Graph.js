import React from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

const Graph = props => {
  const data = {
    labels: [...Object.keys(props.data)],
    datasets: [
      {
        label: `Meteorite impact by ${props.category}`,
        backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(0,99,132,0.2)', 'rgba(0,0,132,0.2)'],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [...Object.values(props.data)]
      }
    ]
  };

  return (
    <div>
      {props.category === 'fall' && <Bar data={data} />}
      {props.category === 'year' && <Line data={data} />}
      {props.category === 'mass' && <Line data={data} />}
      {props.category === 'recclass' && <Doughnut data={data} />}
    </div>
  );
};


export default Graph;