import React, {useState, useContext, useEffect} from 'react';
import PokeCard from './PokeCard';
import GlobalStateContext from '../global/GlobalStateContext';
import {PokedexContainer} from './styledPokedex'
import { useHistory } from 'react-router-dom';

export default function Pokedex () {
  const states = useContext(GlobalStateContext);
  const history = useHistory();

    
    const removerPokemon = (pokemon) => {
      const newListPokemon = states.pokedex.filter((poke) => {
        return poke !== pokemon
      })
      //envia o pokemon para a lista Home
      states.setPokemonList([pokemon, ...states.pokemonList ])
      //retira da pokedex
      states.setPokedex(newListPokemon)
    }


    const detalhesPokemon = (pokemon) => {
      //envia pokemon para página de detalhes
      states.setPokemonDetails(pokemon)
      //troca para página de detalhes
      history.push('/detalhes')
    }

   
  
    return (
        <PokedexContainer>
          {/* se tiver pokemon na lista da pokedex ele vai mapear e mostra na tela */}
            {states.pokedex && states.pokedex.map((pokemon) => {
                return <PokeCard id={pokemon.id} nome={pokemon.name} img={pokemon.sprites.front_default} remover = {() => {removerPokemon(pokemon)}} detalhes={() => {detalhesPokemon(pokemon)}}/>
            })}
        </PokedexContainer> 
    )
}
