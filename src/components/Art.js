import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import '../index.tailwind.css';




class Art extends Component{
  constructor(){
    super()

    this.state=({
      filter: "",
      showModal: false,
      img: ""
    })
  }

  handleOpenModal = (event) => {
   this.setState({
     showModal: true,
     img: event.target.id
    });
   }

   handleCloseModal = () => {
     this.setState({ showModal: false });
   }

  render(){

    const images = importAll(require.context('../images/art', true, /\.(png|jpe?g|svg)$/));


    function importAll(r){
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
    }


    function showImages(){

      return Object.keys(images).map( (thing, i) => {
        let other = "../images/art/"+thing+""
        return (
        <div className="column nature">
        <div className="content w-64 mx-3 my-6">
          <img onClick={this.handleCloseModal} id={other} src={require("../images/art/"+thing+"")}  style={{width: "100%", height: "auto"}}/>
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
              <div className="flex flex-wrap justify-around">
                {showImages()}
                <Modal
           isOpen={this.state.showModal}
           handleClose={this.handleCloseModal}
           >
        </Modal>
              </div>
          </div>
          <div className='sm:w-2 lg:w-12 xl:w-12 md:w-12 h-full'/>
        </div>
      </div>
    )
  }
}

export default Art;
