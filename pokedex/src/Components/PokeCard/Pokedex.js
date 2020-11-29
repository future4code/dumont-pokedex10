import React, {useState, useContext, useEffect} from 'react';
import PokeCard from './PokeCard';
import GlobalStateContext from '../global/GlobalStateContext';
import {PokedexContainer} from './styledPokedex'
import { useHistory } from 'react-router-dom';

export default function Pokedex () {
    const {states, buttons} = useContext(GlobalStateContext);
    const [novaPokedexList, setNovaPokedexList] = useState()
    const history = useHistory()

    useEffect (() => {
        //mapea todos pokemons ao carregar a tela
        if(!novaPokedexList){
            setNovaPokedexList(states.pokedex.map((pokemon) => {
                    return <PokeCard id={pokemon.id} nome = {pokemon.name} img={pokemon.sprites.front_default} key = {pokemon.id} remover = {() => {removerPokemon(pokemon.id)}} detalhes = {() => {detalhesPokemon(pokemon.id)}} />
                })
            )
        }    
     
    }, [])

    const removerPokemon = (id) => {
        //remove o pokemon da pokedex
        recuperarPokemonHome(id)
        const pokeIndex = states.pokedex
        const novosPokemons = pokeIndex.filter ((poke => { return poke.id !== id })) 
        states.setPokedex (novosPokemons)
        const pokemons = buttons.adicionarPokemon
        pokemons.splice(buttons.adicionarPokemon.indexOf(id), 1)
       
    }

    const recuperarPokemonHome = (id) => {
        //recupera o pokemon na home
        const pokedex = states.pokedex
        const novosPokemons = states.pokedex.filter((pokemon) => {
            for (let i = 0; i <= pokedex.length; i++){
              if(pokemon.id === id){
                return pokemon
              }
            }   
          })
          const recuperandoPokemonHome= states.pokemonList
          recuperandoPokemonHome.unshift(novosPokemons[0] )
          states.setPokemonList ( recuperandoPokemonHome)
    }

    const detalhesPokemon = (id) => {
      const novosPokemons = states.pokedex.filter ((poke => { return poke.id === id })) 
      buttons.setPokemonDetails(novosPokemons)
      history.push('/detalhes')
    }

   
  
    return (
        <PokedexContainer>
            
            {novaPokedexList && novaPokedexList.filter((pokemon) => {
                  for (let i = 0; i <= buttons.adicionarPokemon.length; i++){
                    if(pokemon.props.id === buttons.adicionarPokemon[i]){
                      return pokemon
                    }
                  }
                     
                })
            } 
        </PokedexContainer> 
    )
}
