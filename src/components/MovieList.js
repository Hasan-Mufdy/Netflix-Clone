import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Movie from './Movie';

function MovieList(){
    const [movieArray, setMovieArray] = useState([])
    const getTrendingMovies = () =>{
        const serverURL = `http://localhost:3004/trending`;
        fetch(serverURL)
        .then(response =>{
            response.json().then(data =>{
                console.log(data);
                setMovieArray(data)
            })
        })
    }
    // useEffect(()=>{
    //     getTrendingMovies();
    // })
    return(
        <>
        <Movie />
        <button onClick={getTrendingMovies}>get movies</button>
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
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            )
        })}

        </>
    )
}

export default MovieList;