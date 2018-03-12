import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../index.tailwind.css';
import 'semantic-ui-css/semantic.min.css';
import {Icon, Menu} from 'semantic-ui-react';
import Image from '../images/linkme3.png'
import  Resume from '../images/Gcosta-CV-web.pdf'

class Contact extends Component{


  render(){
    return(
        <div className="flex w-full h-full md:mx-4 lg:mx-8">
          <div className='lg:w-32 sm:w-px md:w-px'></div>
          <div className='container w-full flex overflow-auto'>
            <div className="lg:flex-1 sm:block md:block sm:w-full md:w-full lg:w-3/4 h-full pl-1 align-middle">
              <div className="text-black font-bold text-xl align-middle tracking-wide ml-8 mt-8">GENEVIEVE COSTA</div>
              <div className="text-black font-bold text-base align-middle ml-8 mt-4">PROJECT MANAGER / CREATIVE / TECH</div>

              <div className=" text-grey-darker align-middle leading-loose text-sm pl-8 pt-4">Genevieve is a West Coast transplant, based in New York working as a strategic, multidisciplinary Project Manager with an extensive project portfolio in the creative and tech fields. Over the past 5 years, Genevieve has an delivered large scale digital, print, marketing, software and brand projects. Working alongside a wide range of industries, discilplines and environments, from start-ups to established companies, her aim is to find creative solutions with design, problem-solving, strategy, and and innovative tech practices.</div>

              <div className=" text-grey-darker align-middle leading-loose text-sm pl-8 pt-4">Although her skill set is vast, her greatest expertise in project management revolves around the world of strategic design, marketing, web development, graphic design, UX and UI. She has a vast understanding of the Project Management process and design.</div>

              <div className=" text-grey-darker align-middle leading-loose text-sm pl-8 pt-4">Genevieve holds a Bachelor of Fine Art from Pacific Northwest College of Art in Portland OR, an Advanced Diploma in Project Management from New York University, and completed the Web Development Immersive from the Flatiron School.</div>

              <div className=" text-grey-darker align-middle leading-loose text-sm pl-8 pt-4">Outside of work youll find her fixing her car, baking, doing home improvement, or sipping a tiki drink.</div>

              <div className="text-grey-darker  text-sm pl-8 pt-4">This site was built by me using <a href="https://reactjs.org/" className="text-grey-darker  text-sm" target="_blank">React.js</a>, <a href="https://semantic-ui.com/" className=" text-grey-darker  text-sm" target="_blank">Semantic UI</a>, <a href="https://tailwindcss.com/" className=" text-grey-darker  text-sm" target="_blank">Tailwind.css</a>, and <a href="http://soulwire.github.io/sketch.js/" className=" text-grey-darker  text-sm" target="_blank">Sketch.js</a>.</div>

              <div as={Menu} className="flex justify-around mt-8 text-center">
              <Menu.Item className="text-center text-grey-darker leading-loose text-sm" name='envelope outline'  href='mailto:gc@gveve.com' target="_blank">
                <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='envelope outline' />
                <div className="py-2">Email me</div>
              </Menu.Item>
              <Menu.Item className="text-center text-grey-darker leading-loose text-sm" name='linkedin in' href="https://www.linkedin.com/in/genevieve-costa/" target="_blank">
                <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='linkedin in' />
                <div className="py-2">LinkedIn</div>
              </Menu.Item>
              <Menu.Item className="text-center text-grey-darker leading-loose text-sm" name='github' href="https://github.com/gveve" target="_blank">
                <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='github' />
                <div className="py-2">GitHub</div>
              </Menu.Item>
              <Menu.Item className="text-center text-grey-darker leading-loose text-sm" name='instagram' href="https://www.instagram.com/gveve/" target="_blank">
                <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='instagram' />
                <div className="py-2">Instagram</div>
              </Menu.Item>
              <Menu.Item className="text-center text-grey-darker leading-loose text-sm" name='file outline' href={Resume} download="GcostaCV18">
                <Icon circular className='text-blue-blu-dark bg-light-blu border border-0 border-transparent hover:border-2 hover:border-teal-blue' name='file outline' />
                <div className="py-2">Resume</div>
              </Menu.Item>
              </div>

            </div>
          </div>
              <div className='sm:w-px md:w-1/4 lg:w-1/4 xl:w-1/4 md:m-4 lg:m-8 xl:m-8 flex-shrink h-full' style={{backgroundImage: "url("+Image+")", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
              </div>
          <div className='lg:w-32'></div>
        </div>
    )
  }
}

export default Contact;
