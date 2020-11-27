import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Titulo = styled.h1`
    font-family: SultanNahiaW20;
    margin: auto;
    color: white;
    
`
const Botao = styled.button`
     background-color: orangered;
    border:none;
    outline: none;
    color: white;
    box-shadow: 1px 1px 2px black;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    :hover{
        background-color: orangered;
        border: none;
    }
    :active{
        box-shadow: none;
    }
    font-family: SultanNahiaW20;
    font-size: 1.2em;
    margin-left: 10px;
    margin-right: 10px;
`

const Cabecalho = styled.header`
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center; 
    background-color: #30a7d7;
`

export default function Header () {
    //hook para manipular a troca de páginas
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
     {history.location.pathname === '/detalhes' && <Botao onClick={() => goToPage('/')}>Voltar</Botao>} 
     {history.location.pathname === '/' && <Titulo>Lista de Pokemons</Titulo>}
     {history.location.pathname === '/pokedex' && <Titulo>Pokedex</Titulo>}
     {history.location.pathname === '/detalhes' && <Titulo>nome do Pokemons</Titulo>}
     {history.location.pathname === "/detalhes" && <Botao onClick={() => goToPage('/pokedex')}>Ir para Pokedex</Botao>} 
 </Cabecalho>
)
}