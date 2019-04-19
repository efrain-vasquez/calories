import React, { Component } from 'react';

import Header from './Header.jsx';
import App from '../App.jsx';


class BMI extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  name: '',
  	  weight: '',
  	  height: '',
  	  gender: '',
  	}
  this.handleInput = this.handleInput.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
	

  handleInput(e) {
    const { target } = e;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, weight, height, gender } = this.state;
    this.props.postData('/userInfo', {
      name: name,
      weight: weight,
      height: height,
      gender: gender,
    });

    this.setState({
      name: '',
      weight: '',
      height: '',
      gender: '',
    });
  }


render() {
    
    const { name, weight, height, gender } = this.state;

    return (
      <div>
        <div>
          <Header />
        </div>
        <label>
          name:{' '}
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          weight:{' '}
          <input
            type="text "
            name="weight"
            value={weight}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          height:{' '}
          <input
            type="text"
            name="height"
            value={height}
            onChange={this.handleInput}
          />
        </label>

         <br />
        <label>
          gender:{' '}
          <input
            type="text"
            name="gender"
            value={gender}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default BMI;