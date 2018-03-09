import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import '../index.tailwind.css';
import 'react-id-swiper/src/styles/css/swiper.css'
import 'semantic-ui-css/semantic.min.css';
import {Icon, Menu, Item} from 'semantic-ui-react';
import EveryVapor from '../images/web/everyvapor.png'
import Gameof1 from '../images/web/gameof1.png'
import Gameof2 from '../images/web/gameof2.png'
import Gameof3 from '../images/web/gameof3.png'
import Reallygood from '../images/web/reallygood.png'
import Reallygood2 from '../images/web/reallygood2.png'
import Vaporpaint from '../images/web/vaporpaint.png'



class Dev extends Component{


  render(){

    const HorizontalSwiperParams = {
      spaceBetween: 50,
      loop: true,
          pagination: {
            el: '.swiper-pagination.swiper-pagination-h',
            clickable: true
          },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };

    const VerticalSwiperParams = {
      effect: 'fade',
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      spaceBetween: 100,
      pagination: {
        el: '.swiper-pagination.swiper-pagination-v',
        clickable: true
      }
    };

    return(
      <div className="w-auto h-full">
          <div className='lg:w-24 xl:w-24 md:w-16 sm:w-px lg:flex-none md:flex-none xl:flex-none sm:flex bg-blue-lighter'/>
          <div className='flex lg:ml-8 lg:mr-8 h-full'>
          <Swiper {...HorizontalSwiperParams}>
            <div className="block overflow-auto">
             <div className='xl:flex lg:flex md:flex sm:block md:justify-around lg:justify-around xl:justify-around'>
             <div className='md:w-2/5 lg:w-2/5 xl:2/5 sm:w-screen sm:block overflow-auto md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-8 lg:ml-8 xl:ml-8 xl:pl-8 lg:pl-8 mb-8'>
                 <div className='block'>
                   <div className="text-black font-bold text-xl tracking-wide ml-8 md:mt-8 lg:mt-8 xl:mt-8">VAPOR PAINT</div>
                   <div className="text-black font-bold text-base ml-8 md:mt-4 lg:mt-4 xl:mt-4">HTML5 Canvas based responsive paint app</div>
                     <a className="text-grey-darker leading-loose text-sm pl-8 md:pt-4 lg:pt-4 xl:pt-4 text-bold" href="http://vapor-paint.surge.sh/" target="_blank" rel="noopener noreferrer"> Demo</a>
                     <a className="text-grey-darker leading-loose text-sm pl-8 pt-4 text-bold" href="https://github.com/gveve/test_colors_frontend" target="_blank" rel="noopener noreferrer">GitHub</a>
                     <div className="text-grey-darker text-sm pt-4">
                     <ul>
                     <li>Deployed app using Heroku for the backend and Surge for the frontend</li>
                     <li>Implemented full user authentication using Ruby gem ‘bcrypt’, localstorage, and JSON web tokens</li>
                     <li>Built front-end with React and object-oriented JS, using React Router, HTML Canvas, and Tailwind CSS</li>
                     <li>Integrated third-party Chroma API to populate Postgres database with Pantone color data</li>
                     </ul>
                     </div>
                 </div>
             </div>
                 <div className='text-center md:w-3/5 lg:w-3/5 xl:3/5 sm:w-screen sm:block md:flex lg:flex xl:flex md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-4 lg:ml-4 xl:ml-4 h-full' >
                   <Swiper {...VerticalSwiperParams}>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8">
                       <a href="http://vapor-paint.surge.sh/" target="_blank" rel="noopener noreferrer">
                       <img  src={Vaporpaint} width="100%" height="auto"/>
                       </a>
                     </div>
                     <div className="mmd:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8">
                       <a href="http://vapor-paint.surge.sh/" target="_blank" rel="noopener noreferrer">
                       <img src={EveryVapor} width="100%" height="auto"/>
                       </a>
                     </div>
                   </Swiper>
                 </div>
             </div>
             </div>


             <div className="block overflow-auto">
              <div className='xl:flex lg:flex md:flex sm:block md:justify-around lg:justify-around xl:justify-around'>
              <div className='md:w-2/5 lg:w-2/5 xl:2/5 sm:w-screen sm:block overflow-auto md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-8 lg:ml-8 xl:ml-8 xl:pl-8 lg:pl-8 mb-8'>
                  <div className='block'>
                    <div className="text-black font-bold text-xl tracking-wide ml-8 md:mt-8 lg:mt-8 xl:mt-8">REALLY GOOD PHOTOS</div>
                    <div className="text-black font-bold text-base ml-8 md:mt-4 lg:mt-4 xl:mt-4">A location based photo sharing app</div>
                      <a className="text-grey-darker leading-loose text-sm pl-8 md:pt-4 lg:pt-4 xl:pt-4 text-bold" href="http://really-good-photos.herokuapp.com/" target="_blank" rel="noopener noreferrer"> Demo</a>
                      <a className="text-grey-darker leading-loose text-sm pl-8 pt-4 text-bold" href="https://github.com/gveve/really_good_photos" target="_blank" rel="noopener noreferrer">GitHub</a>
                      <div className="flex inline-flex pl-8">
                        <div className="text-grey-darker text-sm">Built with:</div>
                        <a className="ml-1 text-grey-darker text-sm text-bold" href="https://github.com/rjmascolo" target="_blank" rel="noopener noreferrer">   Ryan Mascolo </a>
                        <div className="ml-1 text-grey-darker text-sm"> & </div>
                        <a className=" ml-1 text-grey-darker text-sm text-bold" href="https://github.com/jcstorms1" target="_blank" rel="noopener noreferrer">   Jordan Storms </a>
                        </div>
                        <div className="text-grey-darker text-sm pt-4">
                        <ul>
                        <li>Deployed using Heroku </li>
                        <li>Implemented user authentication using ActiveRecord model associations and validations, cookies, and sessions for user control flow</li>
                        <li>Built front-end with Ruby on Rails, and BootStrap UI </li>
                        <li>Integrated third-party Google API to display photo locations on a map </li>
                        <li>Used ERB templating, Bootstrap, HTML, and custom CSS to create responsive front-end </li>
                        <li>Created RESTful JSON API web app using Postgres, with full CRUD capabilities using Rails, ActiveRecord, SQL, and the GeoCoder gem. </li>
                        </ul>
                        </div>
                  </div>
              </div>
                  <div className='text-center md:w-3/5 lg:w-3/5 xl:3/5 sm:w-screen sm:block md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-4 lg:ml-4 xl:ml-4' >
                    <Swiper className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8"{...VerticalSwiperParams}>
                      <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8">
                        <a href="http://really-good-photos.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img  src={Reallygood} width="100%" height="auto"/>
                        </a>
                      </div>
                      <div className="mmd:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8">
                        <a href="http://really-good-photos.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img src={Reallygood2} width="100%" height="auto"/>
                        </a>
                      </div>
                    </Swiper>
                  </div>
              </div>
              </div>


              <div className="block overflow-auto">
               <div className='xl:flex lg:flex md:flex sm:block md:justify-around lg:justify-around xl:justify-around'>
               <div className='md:w-2/5 lg:w-2/5 xl:2/5 sm:w-screen sm:block overflow-auto md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-8 lg:ml-8 xl:ml-8 xl:pl-8 lg:pl-8 mb-8'>
                   <div className='block'>
                     <div className="text-black font-bold text-xl tracking-wide ml-8 md:mt-8 lg:mt-8 xl:mt-8">GAME OF DETHRONES</div>
                     <div className="text-black font-bold text-base ml-8 md:mt-4 lg:mt-4 xl:mt-4">A single page Game of Thrones choose your own adventure game</div>
                       <a className="text-grey-darker leading-loose text-sm pl-8 md:pt-4 lg:pt-4 xl:pt-4" href="https://liamkillion.github.io/game-of-dethrones/" target="_blank" rel="noopener noreferrer"> Demo</a>
                       <a className="text-grey-darker leading-loose text-sm pl-8 pt-4" href="https://github.com/yassimortensen/mod-3-project-frontend" target="_blank" rel="noopener noreferrer">GitHub</a>
                       <div className="flex inline-flex pl-8">
                         <div className="text-grey-darker text-sm">Built with:</div>
                         <a className="ml-1 text-grey-darker text-sm" href="https://github.com/yassimortensen" target="_blank" rel="noopener noreferrer">   Yassi Mortenson </a>
                         <div className="ml-1 text-grey-darker text-sm"> & </div>
                         <a className=" ml-1 text-grey-darker text-sm " href="https://github.com/liamkillion" target="_blank" rel="noopener noreferrer">   Liam Killion </a>
                         </div>
                         <div className="text-grey-darker text-sm pt-4">
                         <ul>
                        <li> Deployed app using Github </li>
                        <li> Made a Single Page Application using object orient JavaScript, custom CSS, Nokogiri, ES6 features, and DOM manipulation</li>
                         <li>Utilized Git/Github for version control</li>
                         <li>Used HTML, and custom CSS to create responsive front-end animations</li>
                         <li>Used Nokogiri gem to perform XML fetch requests to populate storyline</li>
                         <li>Created RESTful JSON API from a Rails backend</li>
                         </ul>
                         </div>
                   </div>
               </div>
                   <div className='text-center md:w-3/5 lg:w-3/5 xl:3/5 sm:w-screen sm:block md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 ' >
                     <Swiper className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8"{...VerticalSwiperParams}>
                       <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8">
                         <a href="https://liamkillion.github.io/game-of-dethrones/" target="_blank" rel="noopener noreferrer">
                         <img  src={Gameof1} width="100%" height="auto"/>
                         </a>
                       </div>
                       <div className="mmd:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8">
                         <a href="https://liamkillion.github.io/game-of-dethrones/" target="_blank" rel="noopener noreferrer">
                         <img src={Gameof2} width="100%" height="auto"/>
                         </a>
                       </div>
                       <div className="mmd:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8">
                         <a href="https://liamkillion.github.io/game-of-dethrones/" target="_blank" rel="noopener noreferrer">
                         <img src={Gameof3} width="100%" height="auto"/>
                         </a>
                       </div>
                     </Swiper>
                   </div>
               </div>
               </div>
          </Swiper>
          </div>
          <div className=' sm:w-px md:w-px lg:w-32 xl:w-64 container bg-blue-lighter flex'/>
      </div>

    )
  }
}

export default Dev;


// <Slider {...settings}>
//
//   <div className="flex w-auto">
//   <div className='flex justify-around'>
//   <div className='w-1/3 overflow-auto ml-8'>
//   <div className='block'>
//   <div className="text-black font-bold text-xl align-middle tracking-wide ml-8 mt-8">VAPOR PAINT</div>
//   <div className="text-black font-bold text-base align-middle ml-8 mt-4">HTML5 Canvas based responsive paint app</div>
//   <a className="text-grey-darker align-middle leading-loose text-sm pl-8 pt-4" href="http://vapor-paint.surge.sh/" target="_blank" rel="noopener noreferrer"> Demo</a>
//   <a className="text-grey-darker align-middle leading-loose text-sm pl-8 pt-4" href="https://github.com/gveve/test_colors_frontend" target="_blank" rel="noopener noreferrer">GitHub</a>
//   <div className="text-grey-darker align-middle leading-loose text-sm pl-8 pt-4">
//   + Deployed app using Heroku for the backend and Surge for the frontend <br/>
//   + Implemented full user authentication using Ruby gem ‘bcrypt’, localstorage, and JSON web tokens <br/>
//   + Built front-end with React and object-oriented JS, using React Router, Victory React (charting), and Semantic UI <br/>
//   + Integrated third-party Intrinio API to populate Postgres database with financial data
//   </div>
//   </div>
//   </div>
//
//   <div className='flex inline-flex w-2/3 mr-8 p-8'>
//     <Slider className='inline-flex'{...settings2}>
//       <div className="flex w-64">
//       <a href="http://vapor-paint.surge.sh/" target="_blank" rel="noopener noreferrer">
//       <img  src={Vaporpaint} width="100%" height="100%"/>
//       </a>
//       </div>
//       <div className="flex w-64">
//       <a href="http://vapor-paint.surge.sh/" target="_blank" rel="noopener noreferrer">
//       <img src={EveryVapor} width="100%" height="100%"/>
//       </a>
//       </div>
//     </Slider>
//   </div>
//   </div>
//   </div>
//
//   <div className="flex w-screen">
//   <div className='flex justify-around'>
//   <div className='w-1/3 overflow-auto ml-4'>
//   <div className='block'>
//   <div className="text-black font-bold text-xl align-middle tracking-wide ml-8 mt-8">REALLY GOOD PHOTOS</div>
//   <div className="text-black font-bold text-base align-middle ml-8 mt-4">A location based photo search app</div>
//   <a className="text-grey-darker align-middle leading-loose text-sm pl-8 pt-4" href="http://really-good-photos.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</a>
//   <a className="text-grey-darker align-middle leading-loose text-sm pl-8 pt-4" href="https://github.com/gveve/really_good_photos" target="_blank" rel="noopener noreferrer">GitHub</a>
//   <div className="flex inline-flex pl-8">
//   <div className="text-grey-darker text-sm">Built with:</div>
//   <a className="ml-1 text-grey-darker text-sm" href="https://github.com/rjmascolo" target="_blank" rel="noopener noreferrer">   Ryan Mascolo </a>
//   <div className="ml-1 text-grey-darker text-sm"> & </div>
//   <a className=" ml-1 text-grey-darker text-sm " href="https://github.com/jcstorms1" target="_blank" rel="noopener noreferrer">   Jordan Storms </a>
//   </div>
//   <div className="text-grey-darker leading-loose text-sm pl-8 pt-4">
//   <p>
//   + Deployed app using Heroku <br/>
//   + Implemented full user authentication using Ruby gem ‘bcrypt’ <br/>
//   + Built front-end with Ruby, and BootStrap UI <br/>
//   + Integrated third-party Google API to display photo locations on a map <br/>
//   + Used ERB templating, Bootstrap, HTML, and custom CSS to create responsive front-end <br/>
//   + Created RESTful web app with full CRUD capabilities using Rails, ActiveRecord, Postgres, and ‘paperclip’ Ruby gem <br/>
//   + Utilized Git/Github for version control, ActiveRecord model associations and validations, and sessions for user control flow
//   </p>
//   </div>
//   </div>
//   </div>
//
//   <div className='flex inline-flex w-2/3 mr-8 p-8'>
//     <Slider className='inline-flex'{...settings2}>
//       <div className="flex w-64">
//       <a href="http://really-good-photos.herokuapp.com/" target="_blank" rel="noopener noreferrer">
//       <img  src={Reallygood} width="100%" height="100%"/>
//       </a>
//       </div>
//       <div className="flex w-64">
//       <a href="http://really-good-photos.herokuapp.com/" target="_blank" rel="noopener noreferrer">
//       <img  src={Reallygood2} width="100%" height="100%"/>
//       </a>
//       </div>
//     </Slider>
//   </div>
//   </div>
//   </div>
//
//   <div className="flex w-screen">
//   <div className='flex justify-around'>
//   <div className='w-1/3 overflow-auto ml-4'>
//   <div className='block'>
//   <div className="text-black font-bold text-xl align-middle tracking-wide ml-8 mt-8">GAME OF DETHRONES</div>
//   <div className="text-black font-bold text-base align-middle ml-8 mt-4">A single page Game of Thrones choose your own adventure game</div>
//   <a className="text-grey-darker align-middle leading-loose text-sm pl-8 pt-4" href="https://liamkillion.github.io/game-of-dethrones/" target="_blank" rel="noopener noreferrer">Demo</a>
//   <a className="text-grey-darker align-middle leading-loose text-sm pl-8 pt-4" href="https://github.com/yassimortensen/mod-3-project-frontend" target="_blank" rel="noopener noreferrer">GitHub</a>
//   <div className="flex inline-flex pl-8">
//   <div className="text-grey-darker text-sm">Built with:</div>
//   <a className="ml-1 text-grey-darker text-sm" href="https://github.com/yassimortensen" target="_blank" rel="noopener noreferrer">   Yassi Mortenson </a>
//   <div className="ml-1 text-grey-darker text-sm"> & </div>
//   <a className=" ml-1 text-grey-darker text-sm " href="https://github.com/liamkillion" target="_blank" rel="noopener noreferrer">   Liam Killion </a>
//   </div>
//   <div className="text-grey-darker align-middle leading-loose text-sm pl-8 pt-4">
//   + Deployed app using Github
//   + Implemented full user authentication using Ruby gem ‘bcrypt’, localstorage, and JSON web tokens
//   + Made a Single Page Application using vanilla JavaScript, Bootstrap, ES6 features, and DOM manipulation
//   + Worked with asynchronous control flow, promises, and callbacks to make requests to backend API
//   + Used ERB templating, Bootstrap, HTML, and custom CSS to create responsive front-end
//   + Designed RESTful JSON API with full CRUD capabilities using Rails, ActiveRecord, SQLite and ‘faker’ Ruby gem
//   + Integrated third-party Intrinio API to populate Postgres database with financial data
//   </div>
//   </div>
//   </div>
//
//   <div className='flex inline-flex w-2/3 mr-8 p-8'>
//     <Slider className='inline-flex'{...settings2}>
//       <div className="flex w-64">
//       <a href="https://liamkillion.github.io/game-of-dethrones/" target="_blank" rel="noopener noreferrer">
//       <img  src={Gameof1} width="100%" height="100%"/>
//       </a>
//       </div>
//       <div className="flex w-64">
//       <a href="https://liamkillion.github.io/game-of-dethrones/" target="_blank" rel="noopener noreferrer">
//       <img src={Gameof2} width="100%" height="100%"/>
//       </a>
//       </div>
//       <div className="flex w-64">
//       <a href="https://liamkillion.github.io/game-of-dethrones/" target="_blank" rel="noopener noreferrer">
//       <img src={Gameof3} width="100%" height="100%"/>
//       </a>
//       </div>
//     </Slider>
//   </div>
//   </div>
//   </div>
//
//
// </Slider>
