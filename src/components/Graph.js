import React from 'react';
import { Bar } from 'react-chartjs-2';

const Graph = props => {
  const data = {
    labels: [...Object.keys(props.data)],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
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
      <Bar data={data} />
    </div>
  );
};


export default Graph;