import React, { useEffect, useState } from 'react';

import  MovieList  from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';

function App() {
  const [movies, setMovies] = useState([]); 
  const [searchValue, setSearchValue] = useState('')
  //API
  const getMovieRequest = async () =>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=bc7b2df0`

    const response = await fetch(url);
    const responseJson = await response.json();
    
    if(responseJson.Search){
      setMovies(responseJson.Search)
    } 
  }
  useEffect(() =>{
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="movies"/>
          <SearchBox  searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className="row">
        <MovieList movies = { movies} />
      
      
        </div>
      </div>
    </>
  );
}

export default App;
