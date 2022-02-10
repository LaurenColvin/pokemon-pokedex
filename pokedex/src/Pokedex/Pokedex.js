import React from 'react';
import { Route, Link, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Pokemon from '../Pokemon/Pokemon'
let urlBase='https://pokeapi.co/api/v2/pokemon';

const Pokedex = () => {

const [pokeData, setPokeData] = useState([])
const [currentPokemon, setCurrentPokemon] = useState({
"abilities": [],
"base_experience": 64,
"forms": [
{
"name": "bulbasaur",
"url": "https://pokeapi.co/api/v2/pokemon-form/1/"
}
],
"game_indices": [],
"height": 7,
"held_items": [],
"id": 1,
"is_default": true,
"location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
"moves": [],
"name": "bulbasaur",
"order": 1,
"past_types": [],
"species": {
"name": "bulbasaur",
"url": "https://pokeapi.co/api/v2/pokemon-species/1/"
},
"sprites": {
"back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
"back_female": null,
"back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
"back_shiny_female": null,
"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
"front_female": null,
"front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
"front_shiny_female": null,
"other": {
"dream_world": {
"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
"front_female": null
},
"home": {
"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
"front_female": null,
"front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
"front_shiny_female": null
},
"official-artwork": {
"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
}
},
"versions": {}
},
"stats": [],
"types": [
{
"slot": 1,
"type": {
"name": "grass",
"url": "https://pokeapi.co/api/v2/type/12/"
}
},
{
"slot": 2,
"type": {
"name": "poison",
"url": "https://pokeapi.co/api/v2/type/4/"
}
}
],
"weight": 69
})

const buttonHandleSubmit = (event) => {
    event.preventDefault();
    let url = urlBase + "?offset=0&limit=200"
    fetch(url)
      .then((response) => response.json())
      .then ((data) => setPokeData(data.results))
      .catch(() => console.log("oops, error"))
  };
  
const getPokemonInfo = (event) => {
    event.preventDefault();
    let url = urlBase + "/" 
    fetch(url)
      .then((response) => response.json())
      .then ((data) => setCurrentPokemon(data))
      .catch(() => console.log("oops, error"))
  };

const list = pokeData.map((pokemon, index) => {
    return (
    // <Link className="pokemon-link" to={'/pokemon/' + pokemon.name} >
    <li key={index} className='pokemon-list-item'>
        {pokemon.name}
        <img 
            className='pokeball' 
            src='https://www.pngarts.com/files/4/Pokeball-PNG-Image-Transparent-Background.png' 
            alt='pokeball'/>
     </li>
    //  </Link>
  )
})

    // const getPokemonType = (data) => {
    //     let type="";
        
    //     for (let i=0; i < data.length; i++) {

    //     }
    // }

    // console.log(Pokemon.types[0].type.name)

    return (
        <div className='pokedex'>
            <div className='left-sidebar'>
                <button className='all-pokemon' onClick={buttonHandleSubmit}>ALL POKEMON</button>
                <div className='poke-list'>
                    {list}
                </div>
            </div>
            <div className='right-sidebar'>
                <div className='individual-pokemon'>
                        <div className='images-container'>
                            <img className='sprite' src={currentPokemon.sprites.front_default} alt='poke-img'/>
                            <img className='sprite' src={currentPokemon.sprites.front_shiny} alt='poke-img'/>
                        </div>
                        <h2>{currentPokemon.name}</h2>
                        <h3>Height: {currentPokemon.height}</h3>
                        <h3>Weight: {currentPokemon.weight}</h3>
                        <h3>Type: </h3>
                        <h3>Type:</h3>
                        <button>Add to Team </button>
                </div>
                {/* <Routes>
                    <Route path='/pokedex/:pokemon' element={<Pokemon />} />
                </Routes> */}
            </div>
        </div>
    )
}

export default Pokedex;
