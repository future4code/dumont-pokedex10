import styled from 'styled-components'

//estilização
export const DivCard = styled.div `
    display: flex;
    width: 300px;
    height: 300px;
    border: 1px solid black;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    margin-top: 10px;
`
export const DivButtons = styled.div `
    display: flex;
    justify-content: center;
`
export const Buttons = styled.button`
    width: 150px;
    height: 50px;
    background-color: transparent;
    border-bottom: none;
    border-left: none;
`
export const CardTitle = styled.img `
    margin: auto;
    font-size: 1.8em;
    font-weight: lighter;
`