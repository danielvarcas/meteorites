import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Axios from 'axios';
import Graph from './components/Graph';

class App extends Component {
  state = {
    category: '',
    dataSet: { data: [] },
    formattedData: {}
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header><h1>Magical Meteorite Data Visualisations</h1></header>
        <Input updateChart={this.updateChart} />
        <Graph category={this.state.category} data={this.state.formattedData} />
      </div>
    );
  }

  updateChart = (category, option) => {
    this.setState({
      category,
      option
    }, () => {
      this.setState({
        formattedData: this.formatData()
      })
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    const query = `?$limit=50000`
    Axios.get(`https://data.nasa.gov/resource/y77d-th95.json${query}`)
      .then((data) => {
        this.setState({
          dataSet: data
        })
      })
      .catch(console.log)
  }

  formatData = () => {
    const data = [...this.state.dataSet.data]
    const formattedData = data.reduce((acc, datum) => {
      const label = datum[this.state.category]
      acc[label] = ++acc[label] || 1;
      return acc;
    }, {})

    if (this.state.category === 'recclass') {
      const newObj = { misc: 0 }
      Object.keys(formattedData).forEach(key => {
        if (formattedData[key] > 500) {
          newObj[key] = formattedData[key]
        } else {
          newObj['misc'] += formattedData[key]
        }
      })

      return newObj;
    }

    if (this.state.category === 'mass') {
      const newObj = {};
      Object.keys(formattedData).forEach(key => {
        const newKey = key / 1000;
        key = (Math.floor(newKey) * 1000);
        newObj[key] = ++newObj[key] || 1;
      })
      return newObj;
    }

    return formattedData
  }
}

export default App;
