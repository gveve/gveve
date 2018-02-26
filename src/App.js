import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, IndexRedirect} from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import HomepageContainer from './containers/HomepageContainer';
import Contact from './components/Contact';
import HeaderContainer from './containers/HeaderContainer';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Dev from './components/Dev';
import Art from './components/Art';
import Party from './components/Party';
import Sketch from 'sketch-js/js/sketch.js';


    var COLOURS = [ '#caebf2', '#fee361', '#a9a9a9'];
    var radius = 0;



class App extends Component {
  constructor(){
    super()
    this.state = {
      visible:false
    }
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })


  render() {


        const { visible } = this.state;

    return (
      <Router>
      <div>
          <HeaderContainer toggleVisibility={this.toggleVisibility}/>
        <div className='overflow-auto' >
        <Sidebar.Pushable >
        <Sidebar as={Menu} animation='overlay' visible={visible} icon='labeled' vertical>
          <Menu.Item name='sun' as={Link} to='/home' >
            <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='sun' />
            Home
          </Menu.Item>
          <Menu.Item name='adjust' as={Link} to='/web' >
            <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='circle outline' />
            Web Development
          </Menu.Item>
          <Menu.Item name='adjust' as={Link} to='/projects' >
            <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='adjust' />
            Projects
          </Menu.Item>
          <Menu.Item name='adjust' as={Link} to='/art' >
            <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='circle' />
            Art
          </Menu.Item>
          <Menu.Item name='moon' as={Link} to='/contact'>
            <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='moon' />
            Contact
          </Menu.Item>
          <Menu.Item name='adjust' as={Link} to='/art' >
            <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='star' />
            Party
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher style={{ height: '84vh'}} id='container'>
        <Switch>
        <Route path='/home' component={Homepage}/>
        <Redirect exact from='/' to='/home' />
        <Route path='/contact' component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path='/web' component={Dev}/>
        <Route path='/art' component={Art}/>
        <Route path='/party' component={Party}/>
        </Switch>
        </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
      </div>
      </ Router>
    );
  }
}


export default App;
