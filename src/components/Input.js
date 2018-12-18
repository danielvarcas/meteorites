import React, { Component } from 'react';

class Input extends Component {
  state = {
    category: ""
    // option: ""
  }
  render() {
    const categories = ['fall', 'year', 'mass']
    // const options = {
    //   fall: [],
    //   test: ['a', 'b']
    // }

    return (
      <form onSubmit={this.handleSubmit}>
        <select onChange={this.changeCategory}>
          <option>Select a category:</option>
          {categories.map(category => {
            return <option value={category} key={category}>
              {category}
            </option>
          })}
        </select>
        {/* 
        {this.state.category && options[this.state.category].length > 0 &&
          < select onChange={this.changeOption}>
            <option>Select an option</option>
            {options[this.state.category].map(option => {
              return <option value={option} key={option}>
                {option}
              </option>
            })}</select>} */}
        <button type="submit">Go</button>
      </form >
    );
  }
  changeCategory = (event) => {
    this.setState({
      category: event.target.value
    })
  }

  changeOption = (event) => {
    this.setState({
      option: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateChart(this.state.category, this.state.option);
  }
}

export default Input;