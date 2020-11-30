import React, { useEffect, useState} from "react";
import axios from "axios";

import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  //Lista de pokemons da home
  const [pokemonList, setPokemonList] = useState([]);
  //lista de pokemons da pokedex
  const [pokedex, setPokedex] = useState([])
  //para página de detalhes do pokemon
  const [pokemonDetails, setPokemonDetails] = useState([])
  //variáveis para o provider
  const states = {pokemonList, setPokemonList, pokedex, setPokedex, pokemonDetails, setPokemonDetails}
 


useEffect(() => {
  getPokemons() 
}, [])

const getPokemons = () => {
  //array estratégico para enviar uma única vez ao state
  const listPokemon = [];
  //numero de requisições de acordo com a quantidade de pokemnos
  //que você desejar.
  //cria um array de pokemons de acordo com a quantidade de repetições
  for (let i = 1; i < 21; i++) {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then((response) => {
        listPokemon[i - 1] = {
          id: response.data.id,
          name: response.data.name,
          status: response.data.stats,
          moves: response.data.moves,
          types: response.data.types,
          sprites: response.data.sprites,            
        };

        //condição para envio da lista
        //se a largura estivar do tamanho que vc desejar, 
        //ele vai passar para o state
        if (listPokemon.length === 20 ) {
          setPokemonList(listPokemon);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

  return (
    <div>
      <GlobalStateContext.Provider value={states}>  
        {props.children}
      </GlobalStateContext.Provider>
    </div>
  );
};
export default GlobalState;
