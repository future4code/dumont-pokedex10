import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Titulo = styled.h1`
    font-family: SultanNahiaW20;
    margin: auto;
    color: white;
    
`
const Botao = styled.button`
    
    border-radius:5px;
    font-family: SultanNahiaW20;
    font-size: 15px;
`

const Cabecalho = styled.header`
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center; 
    background-color: blue;
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
     {console.log(history)}
        {/* condição para mostrar os botões de acordo com a página do site */}
     {history.location.pathname === "/" && <Botao onClick={() => goToPage('/pokedex')}>Ir para Pokedex</Botao>}  
     {history.location.pathname === '/pokedex' && <Botao onClick={() => goToPage('/')}>Voltar para lista</Botao>} 
     {history.location.pathname === '/detalhes' && <Botao onClick={() => goToPage('/')}>Voltar</Botao>} 
     <Titulo>Título</Titulo>
     {history.location.pathname === "/detalhes" && <Botao onClick={() => goToPage('/pokedex')}>Ir para Pokedex</Botao>} 
 </Cabecalho>
)
}