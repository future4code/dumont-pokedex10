
import {DivCard,PokeName, DivButtons, ButtonLeft, ButtonRight, PokeImage} from './styledPokeCard'

export default function PokeCard (props) {
    
    return (
        <DivCard>
            <PokeName>{props.nome}</PokeName>
            <PokeImage src={props.img}></PokeImage>
            <DivButtons>
                <ButtonLeft onClick={props.adicionar}>adicionar..</ButtonLeft>
                <ButtonRight onClick={props.detalhes}>ver detal..</ButtonRight>
            </DivButtons>
        </DivCard>
    )
}