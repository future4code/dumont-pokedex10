import { useContext } from 'react'
import GlobalStateContext from '../global/GlobalStateContext'
import {DivContainerImage, DivPokeImage} from './styledDetails'
import styled from 'styled-components'
//imagens dos pokemons

const Img = styled.img `
    width: 100%;
`


export default function PokeImageDetails () {
    const {states} = useContext(GlobalStateContext);
    const pokemon = states.pokemonDetails[0]
    return (
        <DivContainerImage>
            <DivPokeImage>
               {pokemon && <Img src = {pokemon.sprites.front_default}/>}
            </DivPokeImage>
            <DivPokeImage>
                {pokemon && <Img src = {pokemon.sprites.front_default}/>}
            </DivPokeImage>
        </DivContainerImage>

    )
}
//back_default