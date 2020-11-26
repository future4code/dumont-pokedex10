
import {DivCard, DivButtons, Buttons, CardTitle } from './styledPokeCard'

export default function PokeCard (props) {
    
    return (
        <DivCard>
            <CardTitle src={props.img}></CardTitle>
            <DivButtons>
                <Buttons onClick={props.adicionar}>adicionar..</Buttons>
                <Buttons onClick={props.detalhes}>ver detal..</Buttons>
            </DivButtons>
        </DivCard>
    )
}