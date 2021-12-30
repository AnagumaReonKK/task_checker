import React, { useState } from 'react'
import Modal from 'react-modal'
import GenreBody from './genreBody';

interface Props {
  handleClose: () => void;
  isOpen: boolean;
}

const customStyles = {
  overlay: {
    backgroundColor: "rgb(80, 80, 80, 0.8)"
  },
  content:{
    top: "10%",
    left: "60%",
    right: "50%",
    height: "75vh",
    width: "20vw",
    marginLeft: "-30vw",
    padding: "2vw 10vw",
  }
};

const FormModal = (props: Props) => {

  Modal.setAppElement('#root');

  return (
    <div>
      <Modal 
        isOpen={props.isOpen}
        onRequestClose={props.handleClose}
        style={customStyles}
      >
        <GenreBody />
      </Modal>
    </div>
  )
}

export default FormModal
