import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  state = {
    categoryName: ""
  }
  render() {
    const categories = ['fall']
    const options = ['fall', 'fell']
    return (
      <form>
        <select onChange={this.handleChange}>
          <option>Select a category:</option>
          {categories.map(category => {
            return <option value={category} key={category}>
              {category}
            </option>
          })}
        </select>
        {this.state.categoryName && <select>{options.map(option => {
          return <option value={option} key={option}>
            {option}
          </option>
        })}</select>}
      </form>
    );
  }
  handleChange(event) {
    console.log(event)
  }

}

Input.propTypes = {

};

export default Input;