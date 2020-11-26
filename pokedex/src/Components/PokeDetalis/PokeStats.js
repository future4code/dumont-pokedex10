import { useContext } from 'react'
import styled from 'styled-components'
import {DivContainerImage, P, DivDetails} from './styledDetails'


export default function PokeStats () {
    
    

    return (
        <DivContainerImage>
           <h1>Poderes</h1>
           <DivDetails>
               
                <P>hp:</P> 
                {/* colcoar {pokemon.hp}  e asim sucessivamente*/}
                <P>attack:</P> 
                <P>defense:</P> 
                <P>special-attack:</P> 
                <P>special-defense:</P> 
                <P>speed:</P> 
           </DivDetails>

        </DivContainerImage>

    )

}