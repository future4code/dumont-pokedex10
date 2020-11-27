import React, { useContext } from 'react';
// import GlobalState from '../global/GlobalState';
import GlobalStateContext from '../global/GlobalStateContext';
import { useHistory } from 'react-router-dom';
import PokeCard from '../PokeCard/PokeCard'


import { GridContainer } from './styled';

function Home  ()  {
  const pokemonList = useContext(GlobalStateContext)

      //hook para manipular a troca de páginas
      const history = useHistory()

       //função para trocar de página
    const goToPage = (path) => {
      history.push (path)
  }

const funcaoAdicionar = ( )  => {
console.log('fefe')
}

const funcaoDetalhes = ( )  => {
  console.log('fgefse')
  }

  return(
   
  
<GridContainer>
{console.log('werdw', pokemonList)}
  {/* pega o estado pokemonList e mapeia ele pra pegar o url */}
  {pokemonList && pokemonList.map((item) =>{
  return <PokeCard nome={item.name} key={item.id} adicionar={funcaoAdicionar}  detalhes={funcaoDetalhes} img={item.sprites.front_default} /> 


  }
  )
}

</GridContainer>

      
    



  )
}






export default Home;