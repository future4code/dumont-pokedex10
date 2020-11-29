import {DivContainerImage, P, DivDetails} from './styledDetails'
import { useContext } from 'react';
import GlobalStateContext from '../global/GlobalStateContext';

export default function PokeStats () {
    const {states} = useContext(GlobalStateContext);
    const pokemon = states.pokemonDetails[0]
    

    return (
        <DivContainerImage>
           <h1>Poderes</h1>
           <DivDetails>
                <P><strong>hp:</strong> --------------- {pokemon.status[0].base_stat}</P> 
                <P><strong>attack:</strong> --------------- {pokemon.status[1].base_stat}</P> 
                <P><strong>defense:</strong> --------------- {pokemon.status[2].base_stat}</P> 
                <P><strong>special-attack:</strong> --------------- {pokemon.status[3].base_stat}</P> 
                <P><strong>special-defense:</strong> --------------- {pokemon.status[4].base_stat}</P> 
                <P><strong>speed:</strong> --------------- {pokemon.status[5].base_stat}</P> 
           </DivDetails>
        </DivContainerImage>

    )
}