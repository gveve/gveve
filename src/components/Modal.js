import React, { Component } from 'react';
import Modal from 'react-modal';
import Art from './Art';
import '../index.tailwind.css';


export default props => {
  const {
    isOpen, handleClose, img
  } = props;

  return (
    <Modal
      id="test"
      isOpen={isOpen}
      className="w-full justify-center self-center mt-8 pt-8"
      >
      <div className="w-full justify-center text-center self-center">
      <img src={img}  style={{width: "auto", height: window.innerHeight - window.innerHeight/5}}/>
      <button className="shadow bg-purple hover:bg-purple-light text-white font-bold py-2 px-4 justify-center rounded" onClick={handleClose}>close</button>
      </div>
    </Modal>
  );
}
