import React, { useEffect, useState } from "react";
// import "./styles.css";
import axios from "axios";
import PokeCard from "../Components/PokeCard/PokeCard";

const CardPokemon = (props) => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");


  useEffect(() => {
  
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=20")
      .then((response) => {
        console.log("response" , response.data.results)
        // response.data.results.map((pokemon)  => {

        //   return(
        //    < img src={pokemon.url}  />
        //   )
        // })
        setPokeList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  });

 

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  return (
  <div>



  </div>

  
  )
  }
export default CardPokemon;
