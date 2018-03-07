import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../index.tailwind.css';
import 'react-id-swiper/src/styles/css/swiper.css'
import Swiper from 'react-id-swiper';

class Projects extends Component{


  render(){
    return(
      <div className="w-full h-full flex">
        <div className="flex w-full mx-8">
          <div className='w-32 bg-light-blu'/>
          <div className='flex-1 text-center'>Projects</div>
          <div className='w-32 bg-light-blu'/>
        </div>
      </div>
    )
  }
}

export default Projects;
