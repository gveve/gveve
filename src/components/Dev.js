import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Slider  from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.tailwind.css';
import 'semantic-ui-css/semantic.min.css';
import {Icon, Menu, Item} from 'semantic-ui-react';
import EveryVapor from '../images/everyvapor.png'
import Gameof1 from '../images/gameof1.png'
import Gameof2 from '../images/gameof2.png'
import Gameof3 from '../images/gameof3.png'
import Reallygood from '../images/reallygood.png'
import Vaporpaint from '../images/vaporpaint.png'




class Dev extends Component{


  render(){


    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    var settings2 = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return(

        <div className="flex w-full h-full">
          <div className='container w-32 bg-light-blu'/>
          <div className='container self-center bg-yellow '>
            <Slider {...settings}>

              <div className="flex w-screen bg-purple"><h3>1</h3>
              <div className='flex justify-around'>
              <div className='w-1/3 inline-flex'></div>
              <div className='flex inline-flex w-2/3 mr-8 p-8'>
                <Slider className='inline-flex'{...settings2}>
                  <div className="flex w-64">
                  <a href="http://vapor-paint.surge.sh/" target="_blank" rel="noopener noreferrer">
                  <img  src={Vaporpaint} width="100%" height="100%"/>
                  </a>
                  </div>
                  <div className="flex w-64">
                  <a href="http://vapor-paint.surge.sh/" target="_blank" rel="noopener noreferrer">
                  <img src={EveryVapor} width="100%" height="100%"/>
                  </a>
                  </div>
                </Slider>
              </div>
              </div>
              </div>

              <div className="flex w-screen bg-purple-light"><h3>2</h3>
              <div className='flex justify-around'>
              <div className='w-32 inline-flex'></div>
              <img src="http://placekitten.com/g/400/200"/>
              <div className='w-32 inline-flex'></div>
              </div></div>

              <div className="flex w-screen bg-purple-lighter"><h3>3</h3>
              <div className='flex justify-around'>
              <div className='w-32 inline-flex'></div>
              <img src="http://placekitten.com/g/400/200"/>
              <div className='w-32 inline-flex'></div>
              </div></div>

              <div className="flex w-screen bg-purple-lightest"><h3>4</h3>
              <div className='flex justify-around'>
              <div className='w-32 inline-flex'></div>
              <img src="http://placekitten.com/g/400/200"/>
              <div className='w-32 inline-flex'></div>
              </div></div>

              <div className="flex w-screen bg-purple-dark"><h3>5</h3>
              <div className='flex justify-around'>
              <div className='w-32 inline-flex'></div>
              <img src="http://placekitten.com/g/400/200"/>
              <div className='w-32 inline-flex'></div>
              </div></div>

              <div className="flex w-screen bg-purple-darker"><h3>6</h3>
              <div className='flex justify-around'>
              <div className='w-32 inline-flex'></div>
              <img src="http://placekitten.com/g/400/200"/>
              <div className='w-32 inline-flex'></div>
              </div></div>

            </Slider>
          </div>
          <div className='container w-32 bg-light-blu'/>
        </div>

    )
  }
}

export default Dev;
