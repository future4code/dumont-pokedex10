import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  //pokemonList é a lista de 20 pokemons 
  //pokedex é a lista de pokemons da pokedex que sera usada depois
  const [pokemonList, setPokemonList] = useState([]);
const [pokedex,setPokedex] = useState([ ])

const getPokemons = ( ) =>  {
  axios
  .get('${BASE_URL} ')
  .then((response) => {
    // console.log(response);
    setPokemonList(response.data.results);
  })
  .catch((error) => {
    alert(error.messages);
  });
}
//states tem o states,setters tem o setStates e o request a função
const states = {pokemonList,pokedex}
const setters = {setPokemonList,setPokedex}
const request = {getPokemons}


//esquema de separação
const data = {states,setters,request}

  return (
    <div>
      <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
    </div>
  );
};
export default GlobalState;
