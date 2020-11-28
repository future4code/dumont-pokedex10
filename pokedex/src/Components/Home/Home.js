import React, { useContext } from 'react';
// import GlobalState from '../global/GlobalState';
import GlobalStateContext from '../global/GlobalStateContext';
import { useHistory } from 'react-router-dom';
import PokeCard from '../PokeCard/PokeCard'


import { GridContainer } from './styled';

function Home  ()  {
  const {states,buttons} = useContext(GlobalStateContext);
  const history = useHistory();
  //hook para manipular a troca de páginas

  const funcaoAdicionar = ( id)  => {
    //adiciona os pokemons na Pokedex através do estado global
    const pokemonsSelected = buttons.adicionarPokemon
    pokemonsSelected.push(id)
    buttons.setAdicionarPokemon(pokemonsSelected) 
    
  }

  const funcaoDetalhes = ( id)  => {
    buttons.setVerDetalhes(id)
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