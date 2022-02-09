import './App.css';
import { useState } from "react";
let urlBase='https://pokeapi.co/api/v2/pokemon?offset=0&limit=200';

function App() {

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
    <li key={index} className='pokemon-list-item'>
        {pokemon.name} 
        <img 
            className='pokeball' 
            src='https://www.pngarts.com/files/4/Pokeball-PNG-Image-Transparent-Background.png' 
            alt='pokeball'/>
     </li>
  )
})




  return (
    <div className="App">
      <nav>
        <img className='pikachu' src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png' alt='Pikachu' />
        <div className='center-logo'>
            <h1>Pokédex</h1>
            <img className='logo' src='https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png' alt='logo' />
            <h1>My Team</h1>
        </div>
      </nav>
      <div className='main'>
          <button onClick={buttonHandleSubmit}>ALL POKEMON</button>
          <div className='poke-list'>
              {list}
          </div>
          <div className='side-bar'></div>
      </div>
    </div>
  );
}

export default App;
