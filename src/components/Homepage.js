import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../index.tailwind.css';


class Homepage extends Component {


  render(){

    const Image = 'https://tailwindcss.com/img/card-left.jpg';

    return(
      <div className="w-full h-full flex">
        <div className="flex w-full mx-8 mb-8 border border-yellow">
          <h1> Hey! </h1>
        </div>
      </div>
    )
  }
}

export default Homepage;
