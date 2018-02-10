import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../index.tailwind.css';


class Homepage extends Component {


  render(){

    const Image = 'https://tailwindcss.com/img/card-left.jpg';

    return(
      <div className="w-full h-full flex">
        <div className="flex w-full mx-8">
          <div className='w-24 bg-light-blu'/>
          <div className='flex-1'>
          <div className='flex-1 w-24 h-64 border border-green bg-green'/>
          </div>
          <div className='w-24 bg-light-blu'/>
        </div>
      </div>
    )
  }
}

export default Homepage;
