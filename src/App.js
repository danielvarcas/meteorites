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
        <header><h1>Magical Meteorite Map</h1></header>
        <Input updateChart={this.updateChart} />
        <Graph data={this.state.formattedData} />
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
    return data.reduce((acc, datum) => {
      const label = datum[this.state.category]
      acc[label] = ++acc[label] || 1;
      return acc;
    }, {})
  }
}

export default App;
