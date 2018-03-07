import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../index.tailwind.css';
import cart2 from "../images/art/cart2.jpg";
import gurl from "../images/art/gurl.jpg";
import mansculpt from "../images/art/mansculpt.jpg";
import nona from "../images/art/nona.jpg";
import pigskull from "../images/art/pigskull.jpg";
import poppi from "../images/art/poppi_copy.jpg";
import sculpback from "../images/art/sculpback.jpg";
import sculpside from "../images/art/sculpside.png";
import sculptlady from "../images/art/sculptlady.jpg";
import sculptlady2 from "../images/art/sculptlady2.jpg";


  let arts = [sculpback, sculpside, sculptlady, sculptlady2, nona, poppi, mansculpt, pigskull, cart2, gurl,]

class Art extends Component{
  constructor(){
    super()

    this.state=({
      filter: ""
    })
  }


      showImages = () => {
        return arts.map( (thing, i) => {
          return (
          <div className="column nature">
          <div className="content w-64 mx-3 my-6">
            <img src={thing} alt="Mountains" style={{width: "100%"}}/>
          </div>
          </div>
        )
        })
      }



  render(){

    return(
      <div className="w-full h-full flex overflow-auto">
        <div className="flex w-full ml-2 mt-8">
          <div className='sm:w-2 xl:w-16 md:w-16 lg:w-16 h-full'/>
          <div className='flex-1 mt-8 text-center'>
              <div className="flex flex-wrap justify-around">
                {this.showImages()}
              </div>
          </div>
          <div className='sm:w-2 lg:w-12 xl:w-12 md:w-12 h-full'/>
        </div>
      </div>
    )
  }
}

export default Art;
