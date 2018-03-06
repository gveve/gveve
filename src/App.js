import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, IndexRedirect} from 'react-router-dom';
import './index.tailwind.css';
import 'semantic-ui-css/semantic.min.css';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import HomepageContainer from './containers/HomepageContainer';
import Contact from './components/Contact';
import HeaderContainer from './containers/HeaderContainer';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Dev from './components/Dev';
import Art from './components/Art';
import Party from './components/Party';


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
          <Menu.Item name='sun' className="text-blue-blu-dark leading-loose text-sm" as={Link} to='/home' >
            <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='sun' />
            Home
          </Menu.Item>
          <Menu.Item name='adjust' className="text-blue-blu-dark leading-loose text-sm" as={Link} to='/web' >
            <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='circle outline' />
            Web Development
          </Menu.Item>
          <Menu.Item name='adjust' className="text-blue-blu-dark leading-loose text-sm" as={Link} to='/projects' >
            <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='adjust' />
            Projects
          </Menu.Item>
          <Menu.Item name='adjust' className="text-blue-blu-dark leading-loose text-sm" as={Link} to='/art' >
            <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='circle' />
            Art
          </Menu.Item>
          <Menu.Item name='moon' className="text-blue-blu-dark leading-loose text-sm" as={Link} to='/contact'>
            <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='moon' />
            Contact
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher style={{ height: '84vh'}} className="mx-8" id='container'>
        <Switch>
        <Route path='/home' component={Homepage}/>
        <Route  path='/contact' component={Contact}/>
        <Route  path="/projects" component={Projects}/>
        <Route path='/web' component={Dev}/>
        <Route path='/art' component={Art}/>
        <Redirect exact from='/' to='/home' />
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
