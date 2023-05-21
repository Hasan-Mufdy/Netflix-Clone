import { useState } from 'react';
import MovieList from './MovieList';
import axios from 'axios';
import { useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Home(){
    const [trendingMovies, setTrendingMovies] = useState([])
    
    const serverURL = `${process.env.REACT_APP_serverURL}/trending`;
    fetch(serverURL)
        .then(response => {
            response.json()
            .then(data => {
                setTrendingMovies(data)
            })
        })
  
    
    return(
        <>
        <p>Movies:</p>
        <MovieList />
   
        </>
    )
}

export default Home;