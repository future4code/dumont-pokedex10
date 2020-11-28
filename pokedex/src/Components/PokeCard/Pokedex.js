import React, {useState, useContext, useEffect} from 'react';
import PokeCard from './PokeCard';
import {useHistory} from 'react-router-dom';
import GlobalStateContext from '../global/GlobalStateContext';

export default function Pokedex () {
    const pokemonList = useContext(GlobalStateContext)
    const [novaPokedexList, setNovaPokedexList] = useState()

    useEffect (() => {
        setNovaPokedexList(pokemonList.map((item) => {
            return <PokeCard id = {item.id} nome = {item.name} img={item.sprites.front_default} key = {item.id} remover = {removerPokemon} detalhes = {detalhesPokemon} />
        }))
    }, [])

    const history = useHistory()

    const goToPage = (path) => {
        history.push(path)
    }

    const removerPokemon = (itemARemover) => {
        /*


        */
        // console.log("removerPokemon")
    }

    const detalhesPokemon = () => {
        // console.log("detalhesPokemon")
    }

  
    return (
        <div>
            {novaPokedexList && novaPokedexList.filter((item) => {
                return item.props.id === 1
                })
            }
        </div>
    )
}
