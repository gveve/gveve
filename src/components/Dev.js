import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Slick  from 'react-slick';
import '../index.tailwind.css';

class Dev extends Component{


  render(){
    return(

        <div className="flex w-full h-full">
          <div className='lg:w-32 bg-light-blu'/>
          <div className='flex-1 text-center'>Dev!</div>
          <div className='lg:w-32 bg-light-blu'/>
        </div>

    )
  }
}

export default Dev;
