import React, { useContext } from 'react';
import {Cabecalho, Botao, Titulo} from './StyledHeader'
import { useHistory } from 'react-router-dom';
import GlobalStateContext from '../Components/global/GlobalStateContext';



export default function Header () {
    const states = useContext(GlobalStateContext);
    const pokemon = states.pokemonDetails 
    const history = useHistory()

    //função para trocar de página
    const goToPage = (path) => {
        history.push (path)
    }
    return(
 <Cabecalho>
     {/* condição para mostrar os botões de acordo com a página do site */}
     {history.location.pathname === "/" && <Botao onClick={() => goToPage('/pokedex')}>Ir para Pokedex</Botao>} 
     {history.location.pathname === '/pokedex' && <Botao onClick={() => goToPage('/')}>Voltar para lista</Botao>} 
     {history.location.pathname === '/detalhes' && <Botao onClick={history.goBack}>Voltar</Botao>} 
     {history.location.pathname === '/' && <Titulo>Lista de Pokemons</Titulo>}
     {history.location.pathname === '/pokedex' && <Titulo>Pokedex</Titulo>}
     {history.location.pathname === '/detalhes' && <Titulo>{pokemon.name}</Titulo>}
     {history.location.pathname === "/detalhes" && <Botao onClick={() => goToPage('/pokedex')}>Ir para Pokedex</Botao>} 
 </Cabecalho>
)
}