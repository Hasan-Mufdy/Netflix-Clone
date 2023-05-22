import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalMovie({ movie, addToFav }){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    // this component will handle user comments and add it to favorites
    const [comment, setComment] = useState("");

  const handleAddToFav = () => {
    addToFav({ ...movie, comment });
    handleClose();
  };

  return (
    <>
      {/* <input placeholder='add a comment here...' type="text" value={comment} onChange={(m) => setComment(m.target.value)} />
      <Button variant="primary" onClick={handleAddToFav}>Add to Favorite</Button> */}
      <Button variant="primary" onClick={handleShow}>
        Add a comment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input placeholder='add a comment here...' type="text" value={comment} onChange={(m) => setComment(m.target.value)} />
        <Button variant="primary" onClick={handleAddToFav}>Add to Favorite</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
     
    
    </>
  );
}
export default ModalMovie;