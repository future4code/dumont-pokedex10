import React, {useState, useContext, useEffect} from 'react';
import PokeCard from './PokeCard';
import GlobalStateContext from '../global/GlobalStateContext';

export default function Pokedex () {
    const {states, buttons} = useContext(GlobalStateContext);
    const [novaPokedexList, setNovaPokedexList] = useState()
  

    useEffect (() => {
        //mapea todos pokemons ao carregar a tela
        if(!novaPokedexList){
            setNovaPokedexList(states.pokedex.map((pokemon) => {
                    return <PokeCard id={pokemon.id} nome = {pokemon.name} img={pokemon.sprites.front_default} key = {pokemon.id} remover = {() => {removerPokemon(pokemon.id)}} detalhes = {detalhesPokemon} />
                })
            )
        }    
     
    }, [])

    const removerPokemon = (id) => {
        const pokeIndex = states.pokedex
        const novosPokemons = pokeIndex.filter ((poke => { return poke.id !== id })) 
        states.setPokedex (novosPokemons)
        const pokemons = buttons.adicionarPokemon
        pokemons.splice(buttons.adicionarPokemon.indexOf(id), 1)
       
    }



    const detalhesPokemon = () => {

    }

   
  
    return (
        <div>
            
            {novaPokedexList && novaPokedexList.filter((pokemon) => {
                  for (let i = 0; i <= buttons.adicionarPokemon.length; i++){
                    if(pokemon.props.id === buttons.adicionarPokemon[i]){
                      return pokemon
                    }
                  }
                     
                })
            }
        </div> 
    )
}
