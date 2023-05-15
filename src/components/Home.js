import { useState } from 'react';
import MovieList from './MovieList';

function Home(){
    return(
        <>
        <p>Movies:</p>
        <MovieList />
        </>
    )
}

export default Home;