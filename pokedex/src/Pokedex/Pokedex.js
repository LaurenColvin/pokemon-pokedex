import React from 'react';
import { Route, Link, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Pokemon from '../Pokemon/Pokemon'
let urlBase='https://pokeapi.co/api/v2/pokemon?offset=0&limit=200';

const Pokedex = () => {

const [pokeData, setPokeData] = useState([])


const buttonHandleSubmit = (event) => {
    event.preventDefault();
    fetch(urlBase)
      .then((response) => response.json())
      .then ((data) => setPokeData(data.results))
      .catch(() => console.log("oops, error"))
  };

const list = pokeData.map((pokemon, index) => {
    return (
    <Link className="pokemon-link" to={'/pokemon/' + pokemon.name} >
    <li key={index} className='pokemon-list-item'>
        {pokemon.name}
        <img 
            className='pokeball' 
            src='https://www.pngarts.com/files/4/Pokeball-PNG-Image-Transparent-Background.png' 
            alt='pokeball'/>
     </li>
     </Link>
  )
})

    return (
        <div className='pokedex'>
            <div className='left-sidebar'>
                <button onClick={buttonHandleSubmit}>ALL POKEMON</button>
                <div className='poke-list'>
                    {list}
                </div>
            </div>
            <div className='right-sidebar'>
                <h2>SINGLE POKEMON</h2>
                <Routes>
                    <Route path='/pokedex/:pokemon' element={<Pokemon />} />
                </Routes>
            </div>
        </div>
    )
}

export default Pokedex;
