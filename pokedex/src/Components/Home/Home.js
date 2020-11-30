import React, { useContext ,useState} from 'react';
import GlobalStateContext from '../global/GlobalStateContext';
import { useHistory } from 'react-router-dom';
import PokeCard from '../PokeCard/PokeCard'


import { GridContainer } from './styled';

function Home() {
  const states= useContext(GlobalStateContext);
  const history = useHistory();
        
  //adiciona os pokemons na Pokedex através do estado global
  const funcaoAdicionar = (pokemon)  => {
  //filtra o pokemon selecionado
  const newListPokemon = states.pokemonList.filter((poke) => {
      return poke !== pokemon
  })
  //envia o pokemon para a pokedex
  states.setPokedex([pokemon, ...states.pokedex ])
  //retira da lista na home
  states.setPokemonList(newListPokemon)
  }

  const funcaoDetalhes = ( pokemon)  => {
    //enviar o pokemon para página de detalhes
    states.setPokemonDetails(pokemon)
    //muda para página de detalhes
    history.push('/detalhes')
  }

  return(
    <GridContainer>
      {/* se tiver pokemon na lista ele vai mapear e mostra na tela */}
      {states.pokemonList && states.pokemonList.map((pokemon) => {
          return <PokeCard id={pokemon.id} nome={pokemon.name} img={pokemon.sprites.front_default} adicionar = {() => {funcaoAdicionar(pokemon)}} detalhes={() => {funcaoDetalhes(pokemon)}}/>
      })}      
    </GridContainer>
  )



  }



export default Home;