import {useState , useEffect} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';


function FavList(){
    const [movies, setFavArr] = useState([])
    const getFavMovies = () =>{
        const serverURL = `${process.env.REACT_APP_serverURL}/addToFav`;
        fetch(serverURL)
        // .then((response)=>{
        //     response.json()
        //     .then(data=>{
        //         setFavArr(data)
        //         console.log(data)
        //     })
        // })
        axios.get(serverURL)
        .then(response => {
            setFavArr(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    }

    useEffect(()=>{
        getFavMovies()
    },[])
    return(
        <div>
        <h1>favorite movies:</h1>
        {movies.map(movie => (
        // <div key={movie.id}>
        //   <h3>{movie.title}</h3>
        //   <p>{movie.release_date}</p>
        //   <p>{movie.comment}</p>
        // </div>
        //
        <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>
                    {movie.id}
                  </Card.Text>
                  <Card.Text>
                    {movie.release_date}
                  </Card.Text>
                  <Card.Text>
                    {movie.comment}
                  </Card.Text>
                </Card.Body>
              </Card>
      ))}

        
        </div>
    )
    }

    export default FavList;