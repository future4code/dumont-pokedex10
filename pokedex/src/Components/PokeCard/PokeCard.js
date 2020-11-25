import {DivCard, DivButtons, Buttons, CardTitle } from './styledPokeCard'

export default function PokeCard () {
    return (
        <DivCard>
            <CardTitle>PokeCard.</CardTitle>
            <DivButtons>
                <Buttons>adicionar..</Buttons>
                <Buttons>ver detal..</Buttons>
            </DivButtons>
        </DivCard>
    )
}