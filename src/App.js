import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import HomepageContainer from './containers/HomepageContainer';
import Contact from './components/Contact';
import HeaderContainer from './containers/HeaderContainer';
import Homepage from './components/Homepage';
import Projects from './components/Projects';

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
          <Menu.Item name='sun' as={Link} to='/' >
            <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='sun' />
            Home
          </Menu.Item>
          <Menu.Item name='adjust' as={Link} to='/projects' >
            <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='adjust' />
            Work
          </Menu.Item>
          <Menu.Item name='moon' as={Link} to='/contact'>
            <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='moon' />
            Contact
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher style={{ height: '84vh'}}>
        <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/contact' component={Contact}/>
        <Route path="/projects" component={Projects}/>
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
