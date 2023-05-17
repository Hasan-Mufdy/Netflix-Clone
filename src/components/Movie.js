import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from './ModalMovie';



function Movie(){
    const [movieArray, setMovieArray] = useState([])
    const getTrendingMovies = () =>{
        const serverURL = `${process.env.REACT_APP_serverURL}/trending`;
        fetch(serverURL)
        .then(response =>{
            response.json().then(data =>{
                console.log(data);
                setMovieArray(data)
            })
        })
    }
    useEffect(()=>{
        getTrendingMovies();
    }, []);
    // const addToFav = (item) =>{
    //     const serverURL = `${process.env.REACT_APP_serverURL}/addToFav`;
    //     axios.post(serverURL, item)
    //     .then(response => {
    //         console.log(response.data)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }
    const addToFav = (item) => {  // to save the movie data to favorites // (with the comment)
        const serverURL = `${process.env.REACT_APP_serverURL}/addToFav`;
        const data = {
          name: item.title,
          poster_path: item.poster_path,
          overview: item.overview,
          comment: '' // will be empty at first
        };
        axios.post(serverURL, data)
          .then(response => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    ////////////////////
    return(
        <>
        
        {/* <button onClick={getTrendingMovies}>get movies</button> */}
        {movieArray.map(item=>{
            return(
                <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src={item.poster_path} /> */}
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.overview}
                  </Card.Text>
                  <Card.Text>
                    {item.release_date}
                  </Card.Text>
                  {/* <Button variant="primary" onClick={()=>{addToFav(item)}}>Add to Favorite</Button> */}
                </Card.Body>
                <ModalMovie movie={item} addToFav={addToFav} />
              </Card>
            )
        })}

        
        </>
    )
}

export default Movie;