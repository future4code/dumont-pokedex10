import React  from "react";
import axios from "axios"
import styled from "styled-components";

const PokemonSelect = styled.select`
  display:flex;
  margin:1rem  40rem;
  justify-content:center;
`;

const Section = styled.section`
  display:flex;
position:relative;
top:17.7rem;
height:5rem;
  justify-content:center;
  background-color:black;
`;





function CardPokemon () {
  state = {
    pokemonLista: [],
    selectedPokemonUrl: ""
  };

  componentDidMount() {
    this.buscarPokemons();
  }

  buscarPokemons = () => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";
    
    axios.get(apiUrl).then((resposta) => {
      // handle success
      this.setState({ pokemonLista: resposta.data.results });
    });
  };

  onChangeSelect = (event) => {
    
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${event.target.value}`;
    axios.get(apiUrl).then((resposta) => {
      // handle success
      console.log("RESPOSTA POKEMON", resposta.data.sprites.front_default);
      this.setState({
        selectedPokemonUrl: resposta.data.sprites.front_default
      });
    });
  };

  render() {
   
    const optionList = this.state.pokemonLista.map((pokemon) => {
      return <option key={pokemon.name}>{pokemon.name}</option>;
    });

    return (

      <div>
        
         
        <PokemonSelect onChange={this.onChangeSelect}>
          {optionList}
        </PokemonSelect>
        <img src={this.state.selectedPokemonUrl} />

      </div>
    );
  }
}

export default CardPokemon;
