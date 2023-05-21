import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import ModalMovie from "./ModalMovie";

function Movie(props) {
  ///////

  /////////////////////////////////////////////////////

  const [showFlag, setShowFlag] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});
  const [newArr, setNewArr] = useState([]);
  const [showUpdateModalFlag, setShowUpdateModalFlag] = useState(false);

  const handleShow = (item) => {
    setShowFlag(true);
    setClickedMovie(item);
  };

  const handleClose = () => {
    setShowFlag(false);
  };

  const showUpdateModal = (item) => {
    setClickedMovie(item);
    setShowUpdateModalFlag(true);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModalFlag(false);
  };

  const takeNewDataFromUpdatedModal = (arr) => {
    setNewArr(arr);
    console.log(newArr);
  };

  useEffect(() => {
    setNewArr(props.movies);
  }, [props.movies]);

  const updateComment = async (e) => {
    e.preventDefault();
    const updatedMovie = {
      ...clickedMovie,
      comment: e.target.comment.value,
    };

    const serverURL = `${process.env.REACT_APP_serverURL}/updateComment/${clickedMovie.id}`;
    try {
      const response = await axios.put(serverURL, updatedMovie);
      console.log("Updated movie:", response.data);
      handleCloseUpdateModal();
      takeNewDataFromUpdatedModal(response.data);
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  /// delete:
  const deleteMovie = (movieId) => {
    const serverURL = `${process.env.REACT_APP_serverURL}/deleteMovie/${movieId}`;
    axios
      .delete(serverURL)
      .then((response) => {
        setNewArr(response.data);
      })
      .catch((error) => {
        console.error("Error deleting movie:", error);
      });
  };

  ///////

  return (
    <>
      {newArr.map((item) => {
        return (
          <Card style={{ width: "18rem" }} key={item.id}>
            <Card.Body>
              <Card.Title>{item.favmoviename}</Card.Title>
              <Card.Text>{item.comment}</Card.Text>
              <Card.Text>{item.releaseDate}</Card.Text>
              <Card.Text>{item.favmovieposterpath}</Card.Text>
              <Button variant="success" onClick={() => {showUpdateModal(item);}}>
                Update
              </Button>
              <Button variant="danger" onClick={() => deleteMovie(item.id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        );
      })}

      <Modal show={showUpdateModalFlag} onHide={handleCloseUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={updateComment}>
            <label>
              Comment:
              <input
                type="text"
                name="comment"
                defaultValue={clickedMovie.comment}
              />
            </label>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Movie;
