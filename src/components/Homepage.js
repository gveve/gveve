import React from 'react'
// import Sketch from './sketch.min.js'
import Sketch from 'sketch-js/js/sketch.js'
import { Link } from 'react-router-dom';
import '../index.tailwind.css';
import Background from '../images/linkme.jpg'

// 'light-blu': '#caebf2',
// 'grey-kinda': '#a9a9a9',
// 'white-creamy': '#efefef',
// 'blue-blu-dark': '#2a3e77',
// 'yellow-yello': '#fee361',
// 'teal-med': '#4899c3',
// 'teal-green': '#508694',
// 'grey-teal': '#6b7a8f',
// 'teal-blue': '#6acdec',

var COLOURS = [ '#caebf2', '#fee361', '#a9a9a9'];
var radius = 0;

class Homepage extends React.Component {

  componentDidMount = () => {
  React.createElement('div', {id: 'sketchy'},
  React.createElement(Sketch.create({
        container: document.getElementById( 'sketchy' ),
        autoclear: false,
        retina: 'auto',
        setup: function() {
            console.log( 'setup' );
        },
        update: function() {
            radius = 2 + Math.abs(Math.sin( this.millis * 0.003 ) * 50 );
        },
        // Event handlers
        keydown: function() {
            if ( this.keys.C ) this.clear();
        },
        // Mouse & touch events are merged, so handling touch events by default
        // and powering sketches using the touches array is recommended for easy
        // scalability. If you only need to handle the mouse / desktop browsers,
        // use the 0th touch element and you get wider device support for free.
        touchmove: function() {
            for ( var i = this.touches.length - 1, touch; i >= 0; i-- ) {
                touch = this.touches[i];
                this.lineCap = 'round';
                this.lineJoin = 'round';
                this.fillStyle = this.strokeStyle = COLOURS[ i % COLOURS.length ];
                this.lineWidth = radius;
                this.beginPath();
                this.moveTo( touch.ox, touch.oy );
                this.lineTo( touch.x, touch.y );
                this.stroke();
            }
        }
    }))
      )
  }

    componentWillUnmount = () => {
      let skt = document.getElementById('sketchy')
      skt.remove()
    }

render(){

    return(
        <div className='flex'>
        <div id='genny' className="flex-1 bg-left" style={{backgroundImage: "url(" + Background + ")",  backgroundSize: "contain"}} >
        <div id="sketchy" className="flex-1" >
        </div>
        </div>
        </div>
    )
  }
}

export default Homepage
