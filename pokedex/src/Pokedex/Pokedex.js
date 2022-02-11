import React from 'react';
import { useState, useEffect } from "react";
let urlBase='https://pokeapi.co/api/v2/pokemon';

const Pokedex = (props) => {

const [teamButton, setTeamButton] = useState(true);
const [pokeData, setPokeData] = useState([])
const [currentPokemon, setCurrentPokemon] = useState({})
const [singleUrl, setSingleUrl] = useState('')


useEffect (() => {
    let url = urlBase + "?offset=0&limit=200"
    fetch(url)
      .then((response) => response.json())
      .then ((data) => setPokeData(data.results))
      .catch(() => console.log("oops, error"))
    // setSingleUrl(pokeData[0].url)
})
  

// useEffect (() => {
//     fetch(singleUrl)
//       .then((response) => response.json())
//       .then ((data) => setCurrentPokemon(data))
//       .catch(() => console.log("oops, error"))
// }, [pokeData])


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
    if (props.team.length < 6) {
        setTeamButton(true)
        const teamCopy = [...props.team];
        teamCopy.push(pokemon);
        props.setTeam(teamCopy);
    // } else if (props.team.length === 6) {
    //     const teamCopy = [...props.team];
    //     teamCopy.push(pokemon);
    //     props.setTeam(teamCopy);
    //     setTeamButton(false)
    } else {
        console.log('team full')
        setTeamButton(false)
    }
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

useEffect(() => {
    if (singleData.species !== undefined) {
      fetch(singleData.species.url)
        .then((response) => response.json())
        .then((data) => setGenusData(data.genera[2].genus))
        .catch(() => console.log("oops error"));
    }
  }, [singleData]);

    return (
        <div className='pokedex'>
            <div className='left-sidebar'>
                <div className='poke-list'>
                    {list}
                </div>
            </div>
            <div className='right-sidebar'>
            {currentPokemon.species === undefined ? (
                 <div className='individual-pokemon'>
                    <h2>Choose your Pokemon!</h2>
                 </div>
            ) : (
                <div className='individual-pokemon' >
                        <div className='images-container'>
                            <img className='sprite' src={currentPokemon.sprites.front_default} alt='poke-img'/>
                            <img className='sprite' src={currentPokemon.sprites.front_shiny} alt='poke-img'/>
                        </div>
                        <h2>{currentPokemon.name}</h2>
                        <h3>Height: {currentPokemon.height}</h3>
                        <h3>Weight: {currentPokemon.weight}</h3>
                        <h3>Type: {pokemonType(currentPokemon.types)}  </h3>
                        <h3>{genusData}</h3>
                        {teamButton ? (
                        <button onClick={handleSubmit}>Add to Team </button>
                         ) : (
                        <button onClick={handleSubmit}>Team is Full </button>
                        )}
                </div>
            )}
            </div>
            <div className='pokeball-div'>
            </div>
        </div>
    )
}

export default Pokedex;
