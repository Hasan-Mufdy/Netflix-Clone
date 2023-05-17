import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function ModalMovie({ movie, addToFav }){
    // this component will handle user comments and add it to favorites
    const [comment, setComment] = useState("");

  const handleAddToFav = () => {
    addToFav({ ...movie, comment });
  };

  return (
    <>
      <input placeholder='add a comment here...' type="text" value={comment} onChange={(m) => setComment(m.target.value)} />
      <Button variant="primary" onClick={handleAddToFav}>Add to Favorite</Button>
     
    <br></br>
    <br></br>
    </>
  );
}

export default ModalMovie;