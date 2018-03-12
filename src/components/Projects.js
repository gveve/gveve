import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../index.tailwind.css';
import 'react-id-swiper/src/styles/css/swiper.css'
import Swiper from 'react-id-swiper';
import AAJA from '../images/work/BuzzFeed/AAJAfrontcard.jpg';
import Buzzyou from '../images/work/BuzzFeed/Benefitsfront5.jpg';
import Buzzfam from '../images/work/BuzzFeed/Techfont3.jpg';
import Buzztech from '../images/work/BuzzFeed/Family22.jpg';
import Buzzback from '../images/work/BuzzFeed/backthing.jpg';

import dog from  '../images/work/TwoTrees/60waterst/dog.png';
import TT601 from  '../images/work/TwoTrees/60waterst/TwoTrees_60Water_BrokerageSigns_0119_21.jpg';
import TT602 from  '../images/work/TwoTrees/60waterst/TwoTrees_60Water_BrokerageSigns_0119_22.jpg';
import TT603 from  '../images/work/TwoTrees/60waterst/TwoTrees_60Water_BrokerageSigns_0119_23.jpg';
import TT60 from  '../images/work/TwoTrees/60waterst/TwoTrees_BrokerageSigns_100160.jpg';
import TT61 from  '../images/work/TwoTrees/60waterst/TwoTrees_BrokerageSigns_100161.jpg';
import TT62 from  '../images/work/TwoTrees/60waterst/TwoTrees_BrokerageSigns_100162.jpg';
import Ash10c from  '../images/work/TwoTrees/300ashland/300_Ashland_Place_2510 10_C.jpg';
import Ash1c from  '../images/work/TwoTrees/300ashland/300_Ashland_Place_2522 1_C.jpg';
import Ashchor from  '../images/work/TwoTrees/300ashland/20160609_Comp_horizontal.png';
import Ashcver from  '../images/work/TwoTrees/300ashland/20160609_Comp_vertical.png';
import Ashbro1 from  '../images/work/TwoTrees/300ashland/Brochure_0623_V21.jpg';
import Ashbro2 from  '../images/work/TwoTrees/300ashland/Brochure_0623_V23.jpg';
import Ashbro3 from  '../images/work/TwoTrees/300ashland/Brochure_0623_V24.jpg';
import Ashbro4 from  '../images/work/TwoTrees/300ashland/Brochure_0623_V25.jpg';
import Ashbro5 from  '../images/work/TwoTrees/300ashland/Brochure_0623_V26.jpg';
import Ashbro6 from  '../images/work/TwoTrees/300ashland/Brochure_0623_V27.jpg';
import Ashbro7 from  '../images/work/TwoTrees/300ashland/Brochure_0623_V28.jpg';
import Ashbro8 from  '../images/work/TwoTrees/300ashland/Brochure_0623_V29.jpg';
import Ashcover from  '../images/work/TwoTrees/300ashland/Cover3.png';
import Ashapt from  '../images/work/TwoTrees/300ashland/djkfnvjkdn.png';
import Ashtryp from  '../images/work/TwoTrees/300ashland/djvnvkjnvkjnv.png';
import Ashview from  '../images/work/TwoTrees/300ashland/jdknkjsn.png';
import Ashrend from  '../images/work/TwoTrees/300ashland/jdknkjsn.png';
import Ashvert from  '../images/work/TwoTrees/300ashland/vertical300.png';
import w503 from  '../images/work/TwoTrees/50W23rd/50w23rd-brochure_FINAL2.jpg';
import w504 from  '../images/work/TwoTrees/50W23rd/50w23rd-brochure_FINAL3.jpg';
import w505 from  '../images/work/TwoTrees/50W23rd/50w23rd-brochure_FINAL4.jpg';
import w506 from  '../images/work/TwoTrees/50W23rd/50w23rd-brochure_FINAL5.jpg';
import w507 from  '../images/work/TwoTrees/50W23rd/50w23rd-brochure_FINAL6.jpg';
import w508 from  '../images/work/TwoTrees/50W23rd/50w23rd-brochure_FINAL7.jpg';
import w509 from  '../images/work/TwoTrees/50W23rd/50w23rd-brochure_FINAL8.jpg';
import w5010 from  '../images/work/TwoTrees/50W23rd/50w23rd-brochure_FINAL9.jpg';
import w5011 from  '../images/work/TwoTrees/50W23rd/50w23rd-brochure_FINAL10.jpg';
import w5012 from  '../images/work/TwoTrees/50W23rd/300x250.jpg';
import w5013 from  '../images/work/TwoTrees/50W23rd/600x160.jpg';
import w5014 from  '../images/work/TwoTrees/50W23rd/Broker50w.jpg';
import w5015 from  '../images/work/TwoTrees/50W23rd/FB50w.jpg';

import live1101 from  '../images/work/TwoTrees/110living/DSC_9252.jpg';
import live1102 from  '../images/work/TwoTrees/110living/DSC_9274.jpg';
import live1103 from  '../images/work/TwoTrees/110living/TwoTrees_SandwichSign_0930110.jpg';
import live1104 from  '../images/work/TwoTrees/110living/TwoTrees_SandwichSign_09301102.jpg';
import live1105 from  '../images/work/TwoTrees/110living/TwoTrees_SandwichSign_09301103.jpg';
import live1106 from  '../images/work/TwoTrees/110living/TwoTrees_SandwichSign_09301104.jpg';

import graphic1 from  '../images/work/TwoTrees/ttgraphics/1graphic.jpg';
import graphic2 from  '../images/work/TwoTrees/ttgraphics/2graphic.jpg';
import graphic3 from  '../images/work/TwoTrees/ttgraphics/3graphic.jpg';
import graphic4 from  '../images/work/TwoTrees/ttgraphics/4graphic.jpg';
import graphic5 from  '../images/work/TwoTrees/ttgraphics/5graphic.jpg';
import graphic6 from  '../images/work/TwoTrees/ttgraphics/6graphic.jpg';
import graphic7 from  '../images/work/TwoTrees/ttgraphics/7graphic.jpg';
import graphic8 from  '../images/work/TwoTrees/ttgraphics/8graphic.jpg';
import graphic9 from  '../images/work/TwoTrees/ttgraphics/9graphic.jpg';
import graphic10 from  '../images/work/TwoTrees/ttgraphics/10graphic.jpg';
import graphic11 from  '../images/work/TwoTrees/ttgraphics/11graphic.jpg';
import graphic12 from  '../images/work/TwoTrees/ttgraphics/12graphic.jpg';
import graphic13 from  '../images/work/TwoTrees/ttgraphics/13graphic.jpg';
import graphic14 from  '../images/work/TwoTrees/ttgraphics/14graphic.jpg';
import graphic15 from  '../images/work/TwoTrees/ttgraphics/15graphic.jpg';
import graphic16 from  '../images/work/TwoTrees/ttgraphics/16graphic.png';
import graphic17 from  '../images/work/TwoTrees/ttgraphics/17graphic.png';
import graphic18 from  '../images/work/TwoTrees/ttgraphics/18graphic.png';
import ITTT1 from  '../images/work/TwoTrees/ITwork/ITTT1.jpg';
import ITTT2 from  '../images/work/TwoTrees/ITwork/ITTT2.png';
import ITTT3 from  '../images/work/TwoTrees/ITwork/ITTT3.png';
import ITTT4 from  '../images/work/TwoTrees/ITwork/ITTT4.png';
import ITTT5 from  '../images/work/TwoTrees/ITwork/ITTT5.png';
import ITTT6 from  '../images/work/TwoTrees/ITwork/ITTT6.png';
import ITTT7 from  '../images/work/TwoTrees/ITwork/ITTT7.png';
import ITTT8 from  '../images/work/TwoTrees/ITwork/ITTT8.png';


class Projects extends Component{
  constructor(props) {
        super(props);
        this.state = {
          gallerySwiper: null,
          thumbnailSwiper: null
        };

        this.galleryRef = this.galleryRef.bind(this);
            this.thumbRef = this.thumbRef.bind(this);
          }

          componentWillUpdate(nextProps, nextState) {
            if (nextState.gallerySwiper && nextState.thumbnailSwiper) {
              const { gallerySwiper, thumbnailSwiper } = nextState

              gallerySwiper.controller.control = thumbnailSwiper;
              thumbnailSwiper.controller.control = gallerySwiper;
            }
          }

          galleryRef(ref) {
            if (ref) this.setState({ gallerySwiper: ref.swiper })
          }

          thumbRef(ref) {
            if (ref) this.setState({ thumbnailSwiper: ref.swiper })
          }






  render(){

    const gallerySwiperParams = {
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    };

    const thumbnailSwiperParams = {
      paceBetween: 10,
      centeredSlides: true,
      slidesPerView: 4,
      touchRatio: 0.2,
      slideToClickedSlide: true
    };

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

    const testing = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJrYoMdscW4V8adxgPubm_Jyz9UJd2annEWHVls0bRbN030Er"

    const images = importAll(require.context('../images/work/TwoTrees/twotreesny/', false, /\.(png|jpe?g|svg)$/));


    function importAll(r){
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
    }


    function showImages(){
      return Object.keys(images).map( (thing, i) => {
        let other = '../images/work/TwoTrees/twotreesny/'+`${thing}`
        return (
          <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
            <img  src={require("../images/work/TwoTrees/twotreesny/"+thing+"")} width="auto" height="400"/>
          </div>
      )
      })
    }


    return(
      <div className="w-auto h-full flex">
        <Swiper {...gallerySwiperParams} ref={this.galleryRef}>
        <div className="block overflow-auto">
         <div className='xl:flex lg:flex md:flex sm:block md:justify-around lg:justify-around xl:justify-around'>
         <div className='md:w-2/5 lg:w-2/5 xl:2/5 sm:w-screen sm:block overflow-auto md:ml-8 lg:ml-8 xl:ml-8 xl:pl-8 lg:pl-8 mb-8'>
             <div className='block lg:ml-8 xl:ml-8'>
               <div className="text-black font-bold text-xl tracking-wide ml-8 md:mt-8 lg:mt-8 xl:mt-8">BUZZFEED</div>
               <div className="text-black font-bold text-base ml-8 md:mt-4 lg:mt-4 xl:mt-4">Global Software Development</div>
                 <a className="text-grey-darker leading-loose text-sm pl-8 md:pt-4 lg:pt-4 xl:pt-4 text-bold" href="http://buzzfeed.com/" target="_blank" rel="noopener noreferrer"> BuzzFeed.com</a>
                 <div className="text-grey-darker text-sm pt-4">
                 <ul>
                 <li>Lead project management on a global software and intranet development used by 1500 employees in 10 countires.</li>
                 <li>Developed branding marketing campaings, and swag to enhance the employee expereicne.</li>
                 <li>Managed multiplie vendors and contractors including; developers, deisgners, producers, merchandiser, and benefit providers.</li>
                 <li> Built and implemented Project best practice, imcluding timelines, overall coordination, and full lifecycle process design.</li>
                 <li>Managed employee outreach, benefits, and perks programs.</li>
                 <li>Designed creative assests, print, and digital.</li>
                 </ul>
                 </div>
             </div>
         </div>
             <div className='text-center self-top md:w-3/5 lg:w-3/5 xl:3/5 sm:w-screen sm:block md:flex lg:flex xl:flex md:ml-4 lg:ml-4 xl:ml-4 md:mr-2 lg:mr-2 xl:mr-2 h-full' >
               <Swiper {...VerticalSwiperParams}>
                 <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                   <img  src={Buzzyou} width="100%" height="auto"/>
                 </div>
                 <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                   <img src={Buzztech} width="100%" height="auto"/>
                 </div>
                 <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                   <img src={Buzzfam} width="100%" height="auto"/>
                 </div>
                 <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                   <img src={AAJA} width="100%" height="auto"/>
                 </div>
               </Swiper>
             </div>
         </div>
         </div>


         <div className="block overflow-auto">
          <div className='xl:flex lg:flex md:flex sm:block md:justify-around lg:justify-around xl:justify-around'>
          <div className='md:w-2/5 lg:w-2/5 xl:2/5 sm:w-screen sm:block overflow-auto md:ml-8 lg:ml-8 xl:ml-8 xl:pl-8 lg:pl-8 mb-8'>
              <div className='block lg:ml-8 xl:ml-8'>
                <div className="text-black font-bold text-xl tracking-wide ml-8 md:mt-8 lg:mt-8 xl:mt-8">TWO TREES</div>
                <div className="text-black font-bold text-base ml-8 md:mt-4 lg:mt-4 xl:mt-4">Development of the Two Trees company website</div>
                  <a className="text-grey-darker leading-loose text-sm pl-8 md:pt-4 lg:pt-4 xl:pt-4 text-bold" href="http://twotreesny.com/" target="_blank" rel="noopener noreferrer">Twotreesny.com</a>
                    <div className="text-grey-darker text-sm pt-4">
                    <ul>
                    <li>Assisted in the redesign of the Two Trees website to enhance  transaction pipeline, mobile experience, and third party integrations.</li>
                    <li>Worked directly with creative agencies to develop wireframes, userstories, UX and UI design, and graphics.</li>
                    <li>Sourced freelancers, contract agencies and resources for photoshoots, graphic design, videography and editing, and interior design.</li>
                    <li>Refocused content, updated brand identity and graphic design, and highlight cultural outreach.</li>
                    <li>Increased visit time by 54% and click-throughs by 33%.</li>
                    <li>Developed strong social media strategy, increased account engagement by 43%.</li>
                    </ul>
                    </div>
              </div>
          </div>
              <div className='text-center self-top md:w-3/5 lg:w-3/5 xl:3/5 sm:w-screen sm:block md:flex lg:flex xl:flex md:ml-4 lg:ml-4 xl:ml-4 md:mr-2 lg:mr-2 xl:mr-2 h-full' >
                <Swiper className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white"{...VerticalSwiperParams}>
                  {showImages()}
                </Swiper>
              </div>
          </div>
          </div>

          <div className="block overflow-auto">
           <div className='xl:flex lg:flex md:flex sm:block md:justify-around lg:justify-around xl:justify-around'>
           <div className='md:w-2/5 lg:w-2/5 xl:2/5 sm:w-screen sm:block overflow-auto md:ml-8 lg:ml-8 xl:ml-8 xl:pl-8 lg:pl-8 mb-8'>
               <div className='block lg:ml-8 xl:ml-8'>
                 <div className="text-black font-bold text-xl tracking-wide ml-8 md:mt-8 lg:mt-8 xl:mt-8">TWO TREES</div>
                 <div className="text-black font-bold text-base ml-8 md:mt-4 lg:mt-4 xl:mt-4">Marketing of Two Trees properties</div>
                   <a className="text-grey-darker leading-loose text-sm pl-8 md:pt-4 lg:pt-4 xl:pt-4 text-bold" href="http://twotreesny.com/" target="_blank" rel="noopener noreferrer">Twotreesny.com</a>
                     <div className="text-grey-darker text-sm pt-4">
                     <ul>
                     <li>Created marketing strategy for the residential and commercial building in Brooklyn & Manhattan</li>

                    <li>Developed campaign marketing material, brand touch points, and target audience strategy with the digital marketing agency Hungry to develop the 60 Water St. “Your First” campaign.</li>

                    <li>Integrated brand identity, logo, and color scheme throughout campagins for a cohesive aesthetic.</li>

                    <li>Managed a creative budgets and assisted in media buys.</li>

                    <li>Achieved the highest residential rent roll in Brooklyn to date.</li>
                    <li>Designed Marketing material for cross funtional platforms, print, digital, indoor/outdoor advertising, and radio.</li>
                    <ul>
                    <div className="text-grey-darker font-bold text-sm tracking-wide">NOTABLE PROJECTS</div>
                     <li><a className="text-grey-dark text-sm text-bold" href="http://60water.com/" target="_blank" rel="noopener noreferrer">60 Water St.</a></li>
                     <li><a className="text-grey-dark text-sm text-bold" href="http://60water.com/" target="_blank" rel="noopener noreferrer">300 Ashland Place.</a></li>
                     <li><a className="text-grey-dark text-sm text-bold" href="https://www.325kent.com/" target="_blank" rel="noopener noreferrer">Domino Sugar Factory</a></li>
                     <li><a className="text-grey-dark text-sm text-bold" href="https://www.mercedeshouseny.com/" target="_blank" rel="noopener noreferrer">Mercedes House</a></li>
                     </ul>
                    </ul>
                    </div>
               </div>
           </div>
               <div className='text-center self-top md:w-3/5 lg:w-3/5 xl:3/5 sm:w-screen sm:block md:flex lg:flex xl:flex md:ml-4 lg:ml-4 xl:ml-4 h-full' >
                 <Swiper className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white"{...VerticalSwiperParams}>
                   <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                     <img  src={dog} width="auto" height="400"/>
                   </div>
                   <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                     <img  src={TT601} width="auto" height="400"/>
                   </div>
                   <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                     <img  src={TT602} width="auto" height="400"/>
                   </div>
                   <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                     <img  src={TT603} width="auto" height="400"/>
                   </div>
                   <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                     <img  src={TT60} width="auto" height="400"/>
                   </div>
                   <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                     <img  src={TT61} width="auto" height="400"/>
                   </div>
                   <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                     <img  src={TT62} width="auto" height="400"/>
                   </div>
                 </Swiper>
               </div>
           </div>
           </div>

           <div className="block overflow-auto">
            <div className='xl:flex lg:flex md:flex sm:block md:justify-around lg:justify-around xl:justify-around'>
            <div className='md:w-2/5 lg:w-2/5 xl:2/5 sm:w-screen sm:block overflow-auto md:ml-8 lg:ml-8 xl:ml-8 xl:pl-8 lg:pl-8 mb-8'>
                <div className='block lg:ml-8 xl:ml-8'>
                  <div className="text-black font-bold text-xl tracking-wide ml-8 md:mt-8 lg:mt-8 xl:mt-8">TWO TREES</div>
                  <div className="text-black font-bold text-base ml-8 md:mt-4 lg:mt-4 xl:mt-4">Graphic Design for Two Trees</div>
                    <a className="text-grey-darker leading-loose text-sm pl-8 md:pt-4 lg:pt-4 xl:pt-4 text-bold" href="http://twotreesny.com/" target="_blank" rel="noopener noreferrer">Twotreesny.com</a>
                      <div className="text-grey-darker text-sm pt-4">
                      <ul>
                      <li>Designed marketing packages and layouts for branded advertising.</li>
                      <li>Used Photoshop, Illustrator, and Indesign to create cohesive advertisments, and graphics for cross platform print and digital spaces.</li>
                      <li>Managed creative assests, and overall aesthetic identity.</li>
                      <li>Defined creative direction and vision throughout design and creative projects.</li>
                     </ul>
                     </div>
                </div>
            </div>
                <div className='text-center self-top md:w-3/5 lg:w-3/5 xl:3/5 sm:w-screen sm:block md:flex lg:flex xl:flex md:ml-4 lg:ml-4 xl:ml-4 md:mr-2 lg:mr-2 xl:mr-2 h-full' >
                  <Swiper {...VerticalSwiperParams}>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={graphic1} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={graphic5} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={graphic2} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={graphic16} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={graphic6} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={graphic7} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={graphic9} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={graphic11} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={graphic12} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={graphic15} width="auto" height="400"/>
                    </div>
                  </Swiper>
                </div>
            </div>
            </div>

            <div className="block overflow-auto">
             <div className='xl:flex lg:flex md:flex sm:block md:justify-around lg:justify-around xl:justify-around'>
             <div className='md:w-2/5 lg:w-2/5 xl:2/5 sm:w-screen sm:block overflow-auto md:ml-8 lg:ml-8 xl:ml-8 xl:pl-8 lg:pl-8 mb-8'>
                 <div className='block lg:ml-8 xl:ml-8'>
                   <div className="text-black font-bold text-xl tracking-wide ml-8 md:mt-8 lg:mt-8 xl:mt-8">TWO TREES</div>
                   <div className="text-black font-bold text-base ml-8 md:mt-4 lg:mt-4 xl:mt-4">Tech Development and IT Management</div>
                     <a className="text-grey-darker leading-loose text-sm pl-8 md:pt-4 lg:pt-4 xl:pt-4 text-bold" href="http://twotreesny.com/" target="_blank" rel="noopener noreferrer">Twotreesny.com</a>
                       <div className="text-grey-darker text-sm pt-4">
                       <ul>
                       <li>Managed company wide IT team of 8 and overall tech procurment and development.</li>
                       <li>Redesigned Company servers and networks to improve performance and workflow.</li>
                       <li>Developed operational practices for tech and IT management.</li>
                       <li>Implemented new technology and upgrades, deployed new server systems and networks, oversaw network access and security, holder of all admin permissions.</li>
                       <li>Researched and deployed creative tech projects such as digital art displays, projections, interactive digital art, and music and TV systems.</li>
                       <li>Managed all network infastructure contractors, low voltage, internet, fiber, and security cameras.</li>
                       <li>Managed full IT and Tech budgeting, including development, and procurement.</li>
                       <li>Coordinated installation of video and audio systems for interactive art, displays, and sound systems.</li>
                       </ul>
                      </div>
                 </div>
             </div>
                 <div className='text-center self-top md:w-3/5 lg:w-3/5 xl:3/5 sm:w-screen sm:block md:flex lg:flex xl:flex md:ml-4 lg:ml-4 xl:ml-4 h-full' >
                   <Swiper {...VerticalSwiperParams}>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={ITTT1} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={ITTT3} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={ITTT4} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={ITTT5} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={ITTT6} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={ITTT7} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={ITTT8} width="auto" height="400"/>
                     </div>
                   </Swiper>
                 </div>
             </div>
             </div>

        </Swiper>
      </div>

    )
  }
}

export default Projects;
