import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Axios from 'axios';
import Graph from './components/Graph';

class App extends Component {
  state = {
    category: '',
    option: ''
  }
  render() {
    return (
      <div className="App">
        <header><h1>Magical Meteorite Map</h1></header>
        <Input updateChart={this.updateChart} />
        <Graph />
      </div>
    );
  }

  updateChart = (category, option) => {
    this.setState({
      category,
      option
    }, () => {
      this.fetchData()
    })
  }

  fetchData = () => {
    if (this.state.category === 'fall') {
      const query = `?$limit=50000&${this.state.category}=${this.state.option}`
      Axios.get(`https://data.nasa.gov/resource/y77d-th95.json${query}`)
        .then((data) => {
          console.log(data)
        })
        .catch(console.log)
    }
  }

}

export default App;
