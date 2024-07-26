import MovieApp from './MovieApp.jsx';
import Navbar from './components/Navbar.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  // Hooks for manipulating searching and storing of movies
  const [search, setSearch] = useState("");
  const [movies, setMovie] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState('#141414');
  const [textColor, setTextColor] = useState('white')
  
  const API_KEY = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a83a7dfc5da0d90ab6c2202578ceaa6c&page=";
  const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=a83a7dfc5da0d90ab6c2202578ceaa6c&query=";
  
  //fetching data through themoviedb's API
  useEffect(() =>{
      console.clear()
      const url = search.length === 0 ? API_KEY + Math.floor(Math.random() * 10): SEARCHAPI + search;
      axios.get(url)
      .then((res) => {
          setMovie(res.data.results);
      }).catch((error) => {;
          console.error(error);
      })       
    },[search]);
 
  // update the variable search as the user types
  function inputChange(e){
      setSearch(e.target.value);
  }

  function changeMode(){
    setBackgroundColor(backgroundColor=== '#141414'? 'white':'#141414')
    setTextColor(textColor === 'white'? 'black': 'white')
    console.log(backgroundColor, textColor)
  }
  return (
    <>    
      <Navbar 
      search={search}
      inputChange = {inputChange}
      changeMode = {changeMode}
      backgroundColor = {backgroundColor}
      />  
   <div style={{backgroundColor, color:textColor}}>
      <MovieApp 
      movies={movies}
      />
    </div>
    </>    
  )
}

export default App;
