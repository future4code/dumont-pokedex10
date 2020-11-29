import React, { useContext ,useState} from 'react';
// import GlobalState from '../global/GlobalState';
import GlobalStateContext from '../global/GlobalStateContext';
import { useHistory } from 'react-router-dom';
import PokeCard from '../PokeCard/PokeCard'


import { GridContainer } from './styled';

function Home  ()  {


  const {states,buttons} = useContext(GlobalStateContext);
  const history = useHistory();
        

  const funcaoAdicionar = ( id)  => {
  //adiciona os pokemons na Pokedex através do estado global
    adicionarPokemonPokedex(id)
    const pokedex = buttons.adicionarPokemon
    const novosPokemons = states.pokemonList.filter ((poke => { return poke.id !== id })) 
    pokedex.push(id)
    states.setPokemonList(novosPokemons);
    buttons.setAdicionarPokemon(pokedex)
   
  }

  //recupera pokemons da pokedex
  const adicionarPokemonPokedex = (id) => {
    const novosPokemons = states.pokemonList.filter ((poke => { return poke.id === id })) 
    const pokedex = states.pokedex 
    if (pokedex.length < 20){
    pokedex.unshift(novosPokemons[0])
    states.setPokedex(pokedex)
    }
  }

  const funcaoDetalhes = ( id)  => {
    //ver detalhes do pokemon
    const novosPokemons = states.pokemonList.filter ((poke => { return poke.id === id })) 
    buttons.setPokemonDetails(novosPokemons)
    history.push('/detalhes')
  }

  return(
    <GridContainer>
      {/* pega o estado pokemonList e mapeia ele pra pegar o url  */}
          {states.pokemonList && states.pokemonList.map((item) =>{ 
            return <PokeCard nome={item.name} key={item.id} adicionar={() => {funcaoAdicionar(item.id)}} detalhes={() => {funcaoDetalhes(item.id)}} img={item.sprites.front_default} />  
              }
            ) 
          } 
          
    </GridContainer>
  )
}






export default Home;