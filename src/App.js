import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header><h1>Magical Meteorite Map</h1></header>
        <Input />
      </div>
    );
  }
}

export default App;
