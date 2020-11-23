import React from 'react';
import {Router} from '../routes/Router';
import styled from 'styled-components';

const Titulo = styled.h1`
    font-family: SultanNahiaW20;

`
const Botao = styled.button`
    width: 12vw;
    height: 8vh;
    margin-top: 20px;
    border-radius:5px;
    font-family: SultanNahiaW20;
    font-size: 15px;
`

const Cabecalho = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center; 

`

export default function Header () {

    return(
 <Cabecalho>
     <Titulo>Título</Titulo>
     <Botao>Ver minha Pokedex</Botao>
     <Botao>Voltar</Botao>
     <Botao>Adicionar/Remover da pokedex</Botao>
     
 </Cabecalho>
)
}