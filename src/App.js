import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import FavList from './components/FavList'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path='/' element = {<Home />}></Route>
      <Route path='/favllist' element = {<FavList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
