import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../index.tailwind.css';

class Contact extends Component{


  render(){
    return(
      <div className="w-full h-full flex">
        <div className="flex w-full mx-8">
          <div className='w-24 bg-light-blu'/>
            <div className='flex-1 h-full bg-yellow'>
            
            </div>
          <div className='w-24 bg-light-blu'/>
        </div>
      </div>
    )
  }
}

export default Contact;