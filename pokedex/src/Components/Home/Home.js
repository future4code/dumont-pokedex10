import React, { useContext, useEffect } from 'react';
import GlobalState from '../global/GlobalState';
import GlobalStateContext from '../global/GlobalStateContext';

const {states,requests} = useContext(GlobalStateContext)

import { GridContainer } from './styled';

function Home  ()  {
const {states,requests} = useContext(GlobalStateContext)


useEffect(( ) => {
  requests.getPokemons( )
},[ ])



  return(
    <div>
<GridContainer>
  {/* pega o estado pokemonList e mapeia ele pra pegar o url */}
{states.pokemonList && states.pokemonList.map((item) =>{
  return <CardPokemon url={item.url} />
})}

</GridContainer>

      
    </div>



  )
}






export default Home;