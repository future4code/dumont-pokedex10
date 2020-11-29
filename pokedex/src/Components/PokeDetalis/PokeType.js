import {DivType2} from './styledDetails'
import { useContext } from 'react';
import GlobalStateContext from '../global/GlobalStateContext';


export default function PokeType () {
    const {states} = useContext(GlobalStateContext);
    const pokemon = states.pokemonDetails[0]
    
    return (
        <DivType2>
            <p>{pokemon.types[0].type.name}</p>
            <p>{pokemon.types[1].type.name}</p>
        </DivType2>
    )

}