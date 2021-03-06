import React, { useState } from "react";
import "./App.css";
import Add from "./AddModal";
import { Card, Button, Modal } from 'react-bootstrap';
import { v4 as uuid4 } from "uuid";
import ListMovies from "./MovieList";
import img from "./Wearehere.jpg";
import img2 from "./laterreestanous.jpg";
import img3 from "./Leschevauxdedieu.jpg";
import Filter from "./Filter"
import { Switch,BrowserRouter,Route } from "react-router-dom";
import Description from "./Description"


const App = () => {
  const [filter, setFilter] = useState("")
  const [rating, setRate] = useState(1)
  
  const [movies, setMovies] = useState([
    {
      id: uuid4(),
      name: "We are here ",
      Image: img,
      rating: 4,
      Description: " We are here est un film documentaire qui décrit la quête de plusieurs jeunes désirant surmonter leur sombre réalité afin de trouver de l’énergie positive.",
      Liink:"https://www.youtube.com/embed/qbc8HirM-j4"
    },
    {
      id: uuid4(),
      name: "La terre est à nous ",
      Image: img2,
      rating: 3,
      Description: "Mohamed est un sdf artiste et non voyant. Le film est un voyage vers cet univers à travers les pas vagabond de Mohamed et sa voix toujours libre.",
      Liink:"https://www.youtube.com/embed/55W9ZZtQgvE" 

    },
    {
      id: uuid4(),
      name: "Les cheveaux de dieu  ",
      Image: img3,
      rating: 5,
      Description: "Yassine a 10 ans lorsque le Maroc émerge à peine des années de plomb. Sa mère, Yemma, dirige comme elle peut toute la famille.",
      Liink:"https://www.youtube.com/embed/G0lDyB2ZmhM"    }
  ])
  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilter = (value) => {
    setFilter(value)
  }
  const handleRate = (val) => {
    setRate(val)
  }
  return (
    <div className="App">
      <header className="App-header" >
      <BrowserRouter>
             <Switch>
       <Route exact path='/'>
        <Filter handleFilter={handleFilter} handleRate={handleRate} />
        <h1> Coin d'art </h1>
        <ListMovies movies={movies.filter(el => el.name.trim().toUpperCase().includes(filter.toUpperCase().trim()) && el.rating >= rating)} />
        <Add handleAdd={handleAdd} />
        </Route>
       <Route path='/description/:id'>
            <Description movies={movies}/>
          </Route>
        </Switch>
        </BrowserRouter>
      </header>

      
    </div>
  );


}


export default App
