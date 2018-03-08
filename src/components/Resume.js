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
import Wash25 from  '../images/work/TwoTrees/twotreesny/ws2.png';
import dumboover from  '../images/work/TwoTrees/twotreesny/divdlkvnlksds.png';
import dumbomap from  '../images/work/TwoTrees/twotreesny/map.png';
import Ws4 from  '../images/work/TwoTrees/twotreesny/ws4.png';
import Carrot from  '../images/work/TwoTrees/twotreesny/TTcarrot.jpg';
import Huge from  '../images/work/TwoTrees/twotreesny/TThuge.jpg';
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


class Resume extends Component{
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

    const other = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJrYoMdscW4V8adxgPubm_Jyz9UJd2annEWHVls0bRbN030Er"


    return(
      <div className="w-auto h-full flex">
        <Swiper {...gallerySwiperParams} ref={this.galleryRef}>
        <div className="block overflow-auto">
         <div className='xl:flex lg:flex md:flex sm:block md:justify-around lg:justify-around xl:justify-around'>
         <div className='md:w-2/5 lg:w-2/5 xl:2/5 sm:w-screen sm:block overflow-auto md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-8 lg:ml-8 xl:ml-8 xl:pl-8 lg:pl-8 mb-8'>
             <div className='block lg:ml-8 xl:ml-8'>
               <div className="text-black font-bold text-xl tracking-wide ml-8 md:mt-8 lg:mt-8 xl:mt-8">BUZZFEED</div>
               <div className="text-black font-bold text-base ml-8 md:mt-4 lg:mt-4 xl:mt-4">Global intranet development - and internal marketing and branding</div>
                 <a className="text-grey-darker leading-loose text-sm pl-8 md:pt-4 lg:pt-4 xl:pt-4 text-bold" href="http://buzzfeed.com/" target="_blank" rel="noopener noreferrer"> BuzzFeed.com</a>
                 <div className="text-grey-darker text-sm pt-4">
                 <ul>
                 <li>Lead project management on a global software and intranet development</li>
                 <li>Developed branding and marketing campaings for the intranet and software roll out</li>
                 <li>Managed employee outreach, benefits, and perks programs. Achieving highest enrollment and engagement to date</li>
                 <li>Designed creative assests, print, digital, and merch to improve candidate outreach and retention </li>
                 </ul>
                 </div>
             </div>
         </div>
             <div className='text-center md:w-3/5 lg:w-3/5 xl:3/5 sm:w-screen sm:block md:flex lg:flex xl:flex md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-4 lg:ml-4 xl:ml-4 h-full' >
               <Swiper {...VerticalSwiperParams}>
                 <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                   <img  src={Buzzyou} width="auto" height="400"/>
                 </div>
                 <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                   <img src={Buzztech} width="auto" height="400"/>
                 </div>
                 <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                   <img src={Buzzfam} width="auto" height="400"/>
                 </div>
                 <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                   <img src={AAJA} width="auto" height="400"/>
                 </div>
                 <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                   <img src={Buzzback} width="auto" height="400"/>
                 </div>
               </Swiper>
             </div>
         </div>
         </div>


         <div className="block overflow-auto">
          <div className='xl:flex lg:flex md:flex sm:block md:justify-around lg:justify-around xl:justify-around'>
          <div className='md:w-2/5 lg:w-2/5 xl:2/5 sm:w-screen sm:block overflow-auto md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-8 lg:ml-8 xl:ml-8 xl:pl-8 lg:pl-8 mb-8'>
              <div className='block lg:ml-8 xl:ml-8'>
                <div className="text-black font-bold text-xl tracking-wide ml-8 md:mt-8 lg:mt-8 xl:mt-8">TWO TREES</div>
                <div className="text-black font-bold text-base ml-8 md:mt-4 lg:mt-4 xl:mt-4">Development of the Two Trees company website</div>
                  <a className="text-grey-darker leading-loose text-sm pl-8 md:pt-4 lg:pt-4 xl:pt-4 text-bold" href="http://twotreesny.com/" target="_blank" rel="noopener noreferrer">Twotreesny.com</a>
                    <div className="text-grey-darker text-sm pt-4">
                    <ul>
                    <li>Assisted in the redesign of the Two Trees website to enhance  transaction pipeline, mobile experience, and third party integrations.</li>
                    <li>Worked directly with digital creative agency Hungry to completely overhaul the Two Trees’ company website.</li>
                    <li>Assisted in developing wireframes, userstories, UX and UI design, and graphics.</li>
                    <li>Sourced freelancers, contract agencies and resources for photoshoots, graphic design, videography and editing, and interior design.</li>
                    <li>Refocused content, updated brand identity and graphic design, and highlight cultural outreach.</li>
                    <li>Increased visit time by 54% and click-throughs by 33%</li>
                    </ul>
                    </div>
              </div>
          </div>
              <div className='text-center md:w-3/5 lg:w-3/5 xl:3/5 sm:w-screen sm:block md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-4 lg:ml-4 xl:ml-4' >
                <Swiper className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white"{...VerticalSwiperParams}>
                  <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                    <img  src={Wash25} width="auto" height="400"/>
                  </div>
                  <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                    <img  src={Ws4} width="auto" height="400"/>
                  </div>
                  <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                    <img  src={dumboover} width="auto" height="400"/>
                  </div>
                  <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                    <img  src={dumbomap} width="auto" height="400"/>
                  </div>
                  <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                    <img  src={Carrot} width="auto" height="400"/>
                  </div>
                  <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                    <img  src={Huge} width="auto" height="400"/>
                  </div>
                </Swiper>
              </div>
          </div>
          </div>

          <div className="block overflow-auto">
           <div className='xl:flex lg:flex md:flex sm:block md:justify-around lg:justify-around xl:justify-around'>
           <div className='md:w-2/5 lg:w-2/5 xl:2/5 sm:w-screen sm:block overflow-auto md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-8 lg:ml-8 xl:ml-8 xl:pl-8 lg:pl-8 mb-8'>
               <div className='block lg:ml-8 xl:ml-8'>
                 <div className="text-black font-bold text-xl tracking-wide ml-8 md:mt-8 lg:mt-8 xl:mt-8">TWO TREES</div>
                 <div className="text-black font-bold text-base ml-8 md:mt-4 lg:mt-4 xl:mt-4">Marketing of the Two Trees property 60 Water St.</div>
                   <a className="text-grey-darker leading-loose text-sm pl-8 md:pt-4 lg:pt-4 xl:pt-4 text-bold" href="http://twotreesny.com/" target="_blank" rel="noopener noreferrer">Twotreesny.com</a>
                     <div className="text-grey-darker text-sm pt-4">
                     <ul>
                     <li>Worked closely with the Director of Marketing to create develop new marketing strategy for the residential building 60 Water St.</li>

                    <li>Developed campaign marketing material, brand touch points, and target audience strategy with the digital marketing agency Hungry to develop the 60 Water St. “Your First” campaign.</li>

                    <li>Worked with Rhode Advertising on brand identity, logo, and color scheme.</li>

                    <li>Managed a $500,000 creative budget and $750,000 media buy with agency Ikon3.</li>

                    <li>Achieved the highest residential rent roll in Brooklyn to date.</li>
                    </ul>
                    </div>
               </div>
           </div>
               <div className='text-center md:w-3/5 lg:w-3/5 xl:3/5 sm:w-screen sm:block md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-4 lg:ml-4 xl:ml-4' >
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
            <div className='md:w-2/5 lg:w-2/5 xl:2/5 sm:w-screen sm:block overflow-auto md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-8 lg:ml-8 xl:ml-8 xl:pl-8 lg:pl-8 mb-8'>
                <div className='block lg:ml-8 xl:ml-8'>
                  <div className="text-black font-bold text-xl tracking-wide ml-8 md:mt-8 lg:mt-8 xl:mt-8">TWO TREES</div>
                  <div className="text-black font-bold text-base ml-8 md:mt-4 lg:mt-4 xl:mt-4">Marketing of the Two Trees property 300 Asland Pl.</div>
                    <a className="text-grey-darker leading-loose text-sm pl-8 md:pt-4 lg:pt-4 xl:pt-4 text-bold" href="http://twotreesny.com/" target="_blank" rel="noopener noreferrer">Twotreesny.com</a>
                      <div className="text-grey-darker text-sm pt-4">
                      <ul>
                      <li>Worked closely with the Director of Marketing to create develop new marketing strategy for the residential building 60 Water St.</li>

                     <li>Developed campaign marketing material, brand touch points, and target audience strategy with the digital marketing agency Hungry to develop the 60 Water St. “Your First” campaign.</li>

                     <li>Worked with Rhode Advertising on brand identity, logo, and color scheme.</li>

                     <li>Managed a $500,000 creative budget and $750,000 media buy with agency Ikon3.</li>

                     <li>Partnered with Bo Concept furnishings to design model apartment interiors for cross branded marketing content.</li>
                     </ul>
                     </div>
                </div>
            </div>
                <div className='text-center md:w-3/5 lg:w-3/5 xl:3/5 sm:w-screen sm:block md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-4 lg:ml-4 xl:ml-4' >
                  <Swiper className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8"{...VerticalSwiperParams}>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={Ash10c} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={Ash1c} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={Ashchor} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={Ashcver} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={Ashbro1} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={Ashbro2} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={Ashbro3} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={Ashbro4} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={Ashbro5} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={Ashbro6} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={Ashbro7} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={Ashbro8} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={Ashcover} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={Ashtryp} width="auto" height="400"/>
                    </div>
                    <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                      <img  src={Ashvert} width="auto" height="400"/>
                    </div>
                  </Swiper>
                </div>
            </div>
            </div>

            <div className="block overflow-auto">
             <div className='xl:flex lg:flex md:flex sm:block md:justify-around lg:justify-around xl:justify-around'>
             <div className='md:w-2/5 lg:w-2/5 xl:2/5 sm:w-screen sm:block overflow-auto md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-8 lg:ml-8 xl:ml-8 xl:pl-8 lg:pl-8 mb-8'>
                 <div className='block lg:ml-8 xl:ml-8'>
                   <div className="text-black font-bold text-xl tracking-wide ml-8 md:mt-8 lg:mt-8 xl:mt-8">TWO TREES</div>
                   <div className="text-black font-bold text-base ml-8 md:mt-4 lg:mt-4 xl:mt-4">Marketing of the Two Trees property 50 W 23 rd.</div>
                     <a className="text-grey-darker leading-loose text-sm pl-8 md:pt-4 lg:pt-4 xl:pt-4 text-bold" href="http://twotreesny.com/" target="_blank" rel="noopener noreferrer">Twotreesny.com</a>
                       <div className="text-grey-darker text-sm pt-4">
                       <ul>
                       <li>Worked closely with the Director of Marketing to create develop new marketing strategy for the residential building 60 Water St.</li>

                      <li>Developed campaign marketing material, brand touch points, and target audience strategy with the digital marketing agency Hungry to develop the 60 Water St. “Your First” campaign.</li>

                      <li>Worked with Rhode Advertising on brand identity, logo, and color scheme.</li>

                      <li>Managed a $500,000 creative budget and $750,000 media buy with agency Ikon3.</li>

                      </ul>
                      </div>
                 </div>
             </div>
                 <div className='text-center md:w-3/5 lg:w-3/5 xl:3/5 sm:w-screen sm:block md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-4 lg:ml-4 xl:ml-4' >
                   <Swiper className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white"{...VerticalSwiperParams}>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={w503} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={w504} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={w505} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={w506} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={w507} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={w508} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={w509} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={w5010} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={w5011} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={w5012} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={w5013} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={w5014} width="auto" height="400"/>
                     </div>
                     <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                       <img  src={w5015} width="auto" height="400"/>
                     </div>
                   </Swiper>
                 </div>
             </div>
             </div>

             <div className="block overflow-auto">
              <div className='xl:flex lg:flex md:flex sm:block md:justify-around lg:justify-around xl:justify-around'>
              <div className='md:w-2/5 lg:w-2/5 xl:2/5 sm:w-screen sm:block overflow-auto md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-8 lg:ml-8 xl:ml-8 xl:pl-8 lg:pl-8 mb-8'>
                  <div className='block lg:ml-8 xl:ml-8'>
                    <div className="text-black font-bold text-xl tracking-wide ml-8 md:mt-8 lg:mt-8 xl:mt-8">TWO TREES</div>
                    <div className="text-black font-bold text-base ml-8 md:mt-4 lg:mt-4 xl:mt-4">Marketing of the Two Trees property 110 Livingston.</div>
                      <a className="text-grey-darker leading-loose text-sm pl-8 md:pt-4 lg:pt-4 xl:pt-4 text-bold" href="http://twotreesny.com/" target="_blank" rel="noopener noreferrer">Twotreesny.com</a>
                        <div className="text-grey-darker text-sm pt-4">
                        <ul>
                        <li>Worked closely with the Director of Marketing to create develop new marketing strategy for the residential building 60 Water St.</li>

                       <li>Developed campaign marketing material, brand touch points, and target audience strategy with the digital marketing agency Hungry to develop the 60 Water St. “Your First” campaign.</li>

                       <li>Worked with Rhode Advertising on brand identity, logo, and color scheme.</li>

                       <li>Managed a $500,000 creative budget and $750,000 media buy with agency Ikon3.</li>
                       </ul>
                       </div>
                  </div>
              </div>
                  <div className='text-center md:w-3/5 lg:w-3/5 xl:3/5 sm:w-screen sm:block md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-4 lg:ml-4 xl:ml-4' >
                    <Swiper className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white"{...VerticalSwiperParams}>
                      <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                        <img  src={live1101} width="auto" height="400"/>
                      </div>
                      <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                        <img  src={live1102} width="auto" height="400"/>
                      </div>
                      <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                        <img  src={live1103} width="auto" height="400"/>
                      </div>
                      <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                        <img  src={live1104} width="auto" height="400"/>
                      </div>
                      <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                        <img  src={live1106} width="auto" height="400"/>
                      </div>
                    </Swiper>
                  </div>
              </div>
              </div>

              <div className="block overflow-auto">
               <div className='xl:flex lg:flex md:flex sm:block md:justify-around lg:justify-around xl:justify-around'>
               <div className='md:w-2/5 lg:w-2/5 xl:2/5 sm:w-screen sm:block overflow-auto md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-8 lg:ml-8 xl:ml-8 xl:pl-8 lg:pl-8 mb-8'>
                   <div className='block lg:ml-8 xl:ml-8'>
                     <div className="text-black font-bold text-xl tracking-wide ml-8 md:mt-8 lg:mt-8 xl:mt-8">TWO TREES</div>
                     <div className="text-black font-bold text-base ml-8 md:mt-4 lg:mt-4 xl:mt-4">Graphic and marketing packages for Two Trees</div>
                       <a className="text-grey-darker leading-loose text-sm pl-8 md:pt-4 lg:pt-4 xl:pt-4 text-bold" href="http://twotreesny.com/" target="_blank" rel="noopener noreferrer">Twotreesny.com</a>
                         <div className="text-grey-darker text-sm pt-4">
                         <ul>
                         <li>Worked closely with the Director of Marketing to create develop new marketing strategy for the residential building 60 Water St.</li>

                        <li>Developed campaign marketing material, brand touch points, and target audience strategy with the digital marketing agency Hungry to develop the 60 Water St. “Your First” campaign.</li>

                        <li>Worked with Rhode Advertising on brand identity, logo, and color scheme.</li>

                        <li>Managed a $500,000 creative budget and $750,000 media buy with agency Ikon3.</li>
                        </ul>
                        </div>
                   </div>
               </div>
                   <div className='text-center md:w-3/5 lg:w-3/5 xl:3/5 sm:w-screen sm:block md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 md:ml-4 lg:ml-4 xl:ml-4' >
                     <Swiper className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white"{...VerticalSwiperParams}>
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
                         <img  src={graphic3} width="auto" height="400"/>
                       </div>
                       <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                         <img  src={graphic4} width="auto" height="400"/>
                       </div>
                       <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                         <img  src={graphic6} width="auto" height="400"/>
                       </div>
                       <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                         <img  src={graphic7} width="auto" height="400"/>
                       </div>
                       <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                         <img  src={graphic8} width="auto" height="400"/>
                       </div>
                       <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                         <img  src={graphic9} width="auto" height="400"/>
                       </div>
                       <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                         <img  src={graphic10} width="auto" height="400"/>
                       </div>
                       <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                         <img  src={graphic11} width="auto" height="400"/>
                       </div>
                       <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                         <img  src={graphic12} width="auto" height="400"/>
                       </div>
                       <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                         <img  src={graphic13} width="auto" height="400"/>
                       </div>
                       <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                         <img  src={graphic14} width="auto" height="400"/>
                       </div>
                       <div className="md:mt-8 lg:mt-8 xl:mt-8 md:pt-8 lg:pt-8 xl:pt-8 bg-white">
                         <img  src={graphic15} width="auto" height="400"/>
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

export default Resume;
