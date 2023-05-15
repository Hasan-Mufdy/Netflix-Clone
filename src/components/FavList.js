// import {useState , useEffect} from 'react';
// import MovieList from './MovieList';


// function FavList(){
//     const [favArr,setFavArr] = useState([])
//     const getFavMovies = () =>{
//         const serverURL = `http://localhost:3004/addToFav`;
//         fetch(serverURL)
//         .then((response)=>{
//             response.json()
//             .then(data=>{
//                 setFavArr(data)
//                 console.log(data)
//             })
//         })
//     }

//     useEffect(()=>{
//         getFavMovies()
//     },[])
//     return(
//         <>
//         <h1>FavList</h1>
//         <MemeList favArr={favArr}/>
//         </>
//     )
//     }

//     export default FavList;