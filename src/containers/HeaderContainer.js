import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch } from 'react-router-dom';
import heygveve from '../images/heygveve.png'
import '../index.tailwind.css';
import HomepageContainer from '../containers/HomepageContainer'
import Contact from '../components/Contact';
import Homepage from '../components/Homepage';
import Projects from '../components/Projects';


class HeaderContainer extends Component {
  constructor(props){
    super(props)
  }

  // <Menu.Item name='heart outline'>
  //   <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='heart outline' />
  //   Double Taps
  // </Menu.Item>


  render(){

    return(
      <div>
      <nav fixed='top' className="flex items-center justify-between align-middle">
        <div className="ml-8 pl-6 mb-4">
        <button onClick={this.props.toggleVisibility} className="justify-start items-start px-4 py-3 rounded text-teal-blue hover:text-yellow-yello">
          <svg className="fill-current h-10 w-10" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
        </div>
        <div className="lg:mr-8 md:mr-8 xl:mr-8 pb-4 md:mt-4 lg:mt-4 xl:mt-4 sm:pl-8 sm:ml-8">
           <img className='float-right lg:mr-2 sm:pl-8 sm:ml-8' src={heygveve} height="50" width="auto" />
        </div>
      </nav>
      </div>

    )
  }
}

export default HeaderContainer;
