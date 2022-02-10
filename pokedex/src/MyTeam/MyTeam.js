import React from 'react';
import {useState} from 'react';

const MyTeam = (props) => {

const removePokemon = (id) => {
    const teamCopy = [...props.team];
    const filteredItems = teamCopy.filter((pokemon) => pokemon.id !== id);
    console.log(filteredItems);
    props.setTeam(filteredItems);
  };


const list = props.team.map((currentPokemon) => {
    return (
        <div key={currentPokemon.id} className='individual-pokemon team'>
            <img className='sprite-team' src={currentPokemon.sprites.front_default} alt='poke-img'/>
            <h2 className='team-name'>{currentPokemon.name}</h2>
            <button onClick={() => removePokemon(currentPokemon.id)}>Remove</button>
        </div>
  )
})


    return (
        <div className='pokedex'>
            <div className='left-sidebar'>
            </div>
            <div className='right-sidebar'>
            </div>
            <div className='my-team'>
                {list}
            </div>
            <div className='pokeball-div'>
            </div>
        </div>
    )
}

export default MyTeam;