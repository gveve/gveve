import React, { Component } from 'react';
import Modal from 'react-modal';


export default props => {
  const {
    isOpen, handleClose
  } = props;

  return (
    <Modal
      id="test"
      isOpen={isOpen}>
      <button onClick={handleClose}>close</button>
    </Modal>
  );
}
