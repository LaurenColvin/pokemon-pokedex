import './App.css';
import { Route, Link, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Pokedex from './Pokedex/Pokedex'
import MyTeam from './MyTeam/MyTeam'
import Pokemon from './Pokemon/Pokemon'
let urlBase='https://pokeapi.co/api/v2/pokemon?offset=0&limit=200';

function App() {


  return (
    <div className="App">
      <nav>
        <img className='pikachu' src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png' alt='Pikachu' />
        <div className='center-logo'>
            <h1><Link className='nav-links' to='/pokedex'>Pokédex</Link></h1>
            <img className='logo' src='https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png' alt='logo' />
            <h1><Link className='nav-links' to='/myteam'>My Team</Link></h1>
        </div>
      </nav>
      <div className='main'>
        <Routes>
          <Route path='/pokedex' element={<Pokedex/>} />
          <Route path='/myteam' element={<MyTeam />} />
        </Routes> 
      </div>
    </div>
  );
}

export default App;
