import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../index.tailwind.css';

class Contact extends Component{


  render(){
    return(
      <div div style={{ height: '81.9vh'}} className="w-full h-full flex">
        <div className="flex-1 w-full mx-8 mb-8 border border-yellow">
          <h1> Contact! </h1>
        </div>
      </div>
    )
  }
}

export default Contact;
