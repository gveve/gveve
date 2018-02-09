import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import heygveve from '../images/heygveve.png'
import '../index.tailwind.css';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import HomepageContainer from '../containers/HomepageContainer'
import Portfolio from '../components/Portfolio';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import DoubleTaps from '../components/DoubleTaps'
import Homepage from '../components/Homepage';
import Projects from '../components/Projects';
import Webdev from '../components/Webdev';


class HeaderContainer extends Component {
  constructor(){
    super()

    this.state={
      visible:false,
      type: ''
    }
  }

  // <Menu.Item name='heart outline'>
  //   <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='heart outline' />
  //   Double Taps
  // </Menu.Item>


  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  handleRender = (event) => {

      this.setState({
        type:event.currentTarget.innerText
      })
  }

  render(){

    const { visible } = this.state;

    return(
      <div>
      <nav fixed='top' className="z-40 flex items-center justify-between flex-wrap align-middle">
        <div className="ml-8 mb-4">
        <button onClick={this.toggleVisibility} className="justify-start items-start px-4 py-3 rounded text-teal-blue hover:text-yellow-yello">
          <svg className="fill-current h-10 w-10" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
        </div>
        <div className="align-middle mt-4 mr-6">
           <img src={heygveve} height="99" width="800" />
        </div>
      </nav>
      <div className='overflow-scroll' >
      <Sidebar as={Menu} animation='overlay' visible={visible} icon='labeled' vertical>
        <Menu.Item name='sun' onClick={this.handleRender}>
          <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='sun' />
          Home
        </Menu.Item>
        <Menu.Item as={Link} to='/bio' name='adjust' onClick={this.handleRender}>
          <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='adjust' />
          Work
        </Menu.Item>
        <Menu.Item name='moon' onClick={this.handleRender}>
          <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='moon' />
          Contact
        </Menu.Item>
      </Sidebar>
      </div>
      </div>

    )
  }
}

// <Menu.Item name='eye' onClick={this.handleRender}>
//   <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='eye' />
//   Portfolio
// </Menu.Item>
// <Menu.Item name='bullseye' onClick={this.handleRender}>
//   <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='bullseye' />
//   Projects
// </Menu.Item>
// <Menu.Item name='moon' onClick={this.handleRender}>
//   <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='moon' />
//   About
// </Menu.Item>

export default HeaderContainer;
