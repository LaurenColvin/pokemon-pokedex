import React from 'react';
import { useState, useEffect } from "react";
let urlBase='https://pokeapi.co/api/v2/pokemon';

const Pokedex = (props) => {

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


useEffect (() => {
    let url = urlBase + "?offset=0&limit=200"
    fetch(url)
      .then((response) => response.json())
      .then ((data) => setPokeData(data.results))
      .catch(() => console.log("oops, error"))
})
  


// useEffect (() => {
//     let url = pokeData.results[0].url
//     fetch(url)
//       .then((response) => response.json())
//       .then ((data) => setCurrentPokemon(data))
//       .catch(() => console.log("oops, error"))
// }, [])

const list = pokeData.map((pokemon, index) => {

    const handleClick = (event) => {
    event.preventDefault();
    let url = pokemon.url
    fetch(url)
      .then((response) => response.json())
      .then ((data) => setCurrentPokemon(data))
      .catch(() => console.log("oops, error"));
  };

    return (
    <li key={index} className='pokemon-list-item' onClick={handleClick}>
        {pokemon.name}
        <img 
            className='pokeball' 
            src='https://www.pngarts.com/files/4/Pokeball-PNG-Image-Transparent-Background.png' 
            alt='pokeball'/>
     </li>
  )
})

 const addTeam = (pokemon) => {
    const teamCopy = [...props.team];
    teamCopy.push(pokemon);
    props.setTeam(teamCopy);
  };

 const handleSubmit = (event) => {
    event.preventDefault();
    addTeam(currentPokemon)
  };

 const pokemonType = (data) => {
     if (data.length > 1) {
         return (data[0].type.name + ' ' + data[1].type.name)
     } else {
         return (data[0].type.name)
     }
 };

const [genusData, setGenusData] = useState([
{
"genus": "たねポケモン",
"language": {
"name": "ja-Hrkt",
"url": "https://pokeapi.co/api/v2/language/1/"
}
},
{
"genus": "씨앗포켓몬",
"language": {
"name": "ko",
"url": "https://pokeapi.co/api/v2/language/3/"
}
},
{
"genus": "種子寶可夢",
"language": {
"name": "zh-Hant",
"url": "https://pokeapi.co/api/v2/language/4/"
}
},
{
"genus": "Pokémon Graine",
"language": {
"name": "fr",
"url": "https://pokeapi.co/api/v2/language/5/"
}
},
{
"genus": "Samen-Pokémon",
"language": {
"name": "de",
"url": "https://pokeapi.co/api/v2/language/6/"
}
},
{
"genus": "Pokémon Semilla",
"language": {
"name": "es",
"url": "https://pokeapi.co/api/v2/language/7/"
}
},
{
"genus": "Pokémon Seme",
"language": {
"name": "it",
"url": "https://pokeapi.co/api/v2/language/8/"
}
},
{
"genus": "Seed Pokémon",
"language": {
"name": "en",
"url": "https://pokeapi.co/api/v2/language/9/"
}
},
{
"genus": "たねポケモン",
"language": {
"name": "ja",
"url": "https://pokeapi.co/api/v2/language/11/"
}
},
{
"genus": "种子宝可梦",
"language": {
"name": "zh-Hans",
"url": "https://pokeapi.co/api/v2/language/12/"
}
}
])

  const pokemonGenus = (data) => {
     fetch(data.url)
      .then((response) => response.json())
      .then ((data) => setGenusData(data.genera))
      .catch(() => console.log("oops, error"));
 };

    return (
        <div className='pokedex'>
            <div className='left-sidebar'>
                <div className='poke-list'>
                    {list}
                </div>
            </div>
            <div className='right-sidebar'>
                <div className='individual-pokemon' >
                        <div className='images-container'>
                            <img className='sprite' src={currentPokemon.sprites.front_default} alt='poke-img'/>
                            <img className='sprite' src={currentPokemon.sprites.front_shiny} alt='poke-img'/>
                        </div>
                        <h2>{currentPokemon.name}</h2>
                        <h3>Height: {currentPokemon.height}</h3>
                        <h3>Weight: {currentPokemon.weight}</h3>
                        <h3>Type: {pokemonType(currentPokemon.types)}  </h3>
                        <h3>{genusData[2].genus}</h3>
                        <button onClick={handleSubmit}>Add to Team </button>
                </div>
            </div>
            <div className='pokeball-div'>
            </div>
        </div>
    )
}

export default Pokedex;
