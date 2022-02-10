import './App.css';
import { Route, Link, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Pokedex from './Pokedex/Pokedex'
import MyTeam from './MyTeam/MyTeam'
let urlBase='https://pokeapi.co/api/v2/pokemon?offset=0&limit=200';

function App() {

const [team, setTeam] = useState([]);
const [pikachu, setPikachu] = useState(false);

const handleClick = () => {
    setPikachu((previousPikachu) => {
      return !previousPikachu;
    });
  };

  return (
    <div className="App">
      <nav>
        {pikachu ? (
        <img className='pikachu' src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png' alt='Pikachu' />
        ) : (
        <img className='pikachu-2' src='https://clipart.world/wp-content/uploads/2021/01/Friendly-Pikachu-clipart-transparent.png' alt='Pikachu' />
        )}
        <div className='center-logo'>
            <h1><Link className='nav-links' to='/pokedex' onClick={() => handleClick()}>Pokédex</Link></h1>
            <img className='logo' src='https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png' alt='logo' />
            <h1><Link className='nav-links' to='/myteam' onClick={() => handleClick()}>My Team</Link></h1>
        </div>
      </nav>
      <div className='main'>
        <Routes>
          <Route path='/pokedex' element={<Pokedex team={team} setTeam={setTeam}/>} />
          <Route path='/myteam' element={<MyTeam team={team} setTeam={setTeam}/>} />
        </Routes> 
      </div>
      {/* <div className='right-sidebar'>
      testing
      </div> */}
    </div>
  );
}

export default App;
