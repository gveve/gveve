import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import Modal from './Modal';
import '../index.tailwind.css';

const r = require.context('../images/art', true, /\.(png|jpe?g|svg)$/)

class Art extends Component{
  constructor(){
    super()

    this.state=({
      filter: "",
      showModal: false,
      img: "",
      r: require.context('../images/art', true, /\.(png|jpe?g|svg)$/)
    })
  }

  // componentDidMount = () => {
  //   let name = ReactDOM.findDOMNode(this.refs.name)
  //   // debugger;
  //   this.importAll(require.context('../images/art', true, /\.(png|jpe?g|svg)$/), name)
  // }
  //
  // handleOpenModal = (event) => {
  //   debugger;
  //  this.setState({
  //    showModal: true,
  //    img: event.target.id
  //   });
  //  }
  //
  //  handleCloseModal = () => {
  //    this.setState({ showModal: false });
  //  }
  //
  //  importAll = (r, name) => {
  //  let images = {};
  //  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  //  this.showImages(images, name)
  //  // debugger;
  //
  //  }
  //
  //  showImages = (images, name) => {
  //    // let name = React.findDOMNode(this.refs.name1)
  //    // debugger;
  //    // let handleOpen = {this.handleOpenModal}
  //    let docFrag = document.createDocumentFragment()
  //    let frag = document.createElement('div')
  //    frag.setAttribute("className", " flex flex-wrap")
  //    let doc = name
  //    let keys = Object.keys(images)
  //    for (var i = 0; i < keys.length; i++) {
  //      // debugger;
  //     let thing = keys[i];
  //
  //     let div1 = document.createElement('div');
  //     div1.setAttribute('className', "column nature");
  //     // div1.setAttribute("style", {{width: "25px"}})
  //
  //     let div2 = document.createElement('div');
  //     div2.setAttribute('className', "content w-64  mx-3 my-6")
  //     div2.addEventListener('click', this.handleOpenModal)
  //
  //     let img = document.createElement('img');
  //     img.addEventListener('click', this.handleOpenModal)
  //     img.src = require("../images/art/"+thing+"")
  //     img.setAttribute("id", require("../images/art/"+thing+""))
  //     // img.setAttribute("style", "width": "100%", "height": "auto")
  //     img.setAttribute("width", "25%")
  //     img.setAttribute("height", "auto")
  //
  //     div2.appendChild(img);
  //     div1.appendChild(div2);
  //     // debugger;
  //     docFrag.appendChild(div1);
  //     // frag.appendChild(div1)
  //    }
  //    frag.appendChild(docFrag)
  //    // doc.appendChild(docFrag)
  //    doc.appendChild(frag);
  //  }

   // showImages = (images, name) => {
   //    return Object.keys(images).map( (thing, i) => {
   //      debugger;
   //      let other = `../images/art/${thing}`
   //      return (
   //      <div className="column nature">
   //      <div className="content w-64 mx-3 my-6">
   //        <img src={require('../images/art/pigskull.jpg')} alt="Mountains" style={{width: "100%"}}/>
   //      </div>
   //      </div>
   //    )
   //    })
   //  }

  render(){

    // const {handleOpenModal} = this.handleOpenModal.bind(this)

    const images = importAll(require.context('../images/art', true, /\.(png|jpe?g|svg)$/));

    function importAll(r){
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
    }

    function showImages(){
      return Object.keys(images).map( (thing, i) => {
        // debugger;
        // let other = `../images/art/${thing}`
        return (
        <div className="column nature">
        <div className="content w-64 mx-3 my-6">
          <img src={require("../images/art/"+thing+"")} alt="Mountains" style={{width: "100%"}}/>
        </div>
        </div>
      )
      })
    }


    return(
      <div className="w-full h-full flex overflow-auto">
        <div className="flex w-full ml-2 mt-8">
          <div className='sm:w-2 xl:w-16 md:w-16 lg:w-16 h-full'/>
          <div className='flex-1 mt-8 text-center'>
              <div id="baby" ref="name" className="flex flex-wrap justify-around">
                {showImages()}
              </div>
              <Modal
                 isOpen={this.state.showModal}
                 handleClose={this.handleCloseModal}
                 img={this.state.img}
                 >
              </Modal>
          </div>
          <div className='sm:w-2 lg:w-12 xl:w-12 md:w-12 h-full'/>
        </div>
      </div>
    )
  }
}

export default Art;
