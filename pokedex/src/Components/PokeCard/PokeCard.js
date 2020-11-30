import { useHistory } from 'react-router-dom'
import {DivCard,PokeName, DivButtons, ButtonLeft, ButtonRight, PokeImage} from './styledPokeCard'

export default function PokeCard (props) {
    const history = useHistory()

    return (
        <DivCard id={props.id}>
            <PokeName>{props.nome}</PokeName>
            <PokeImage src={props.img}></PokeImage>
            <DivButtons>
                {history.location.pathname === "/pokedex"? <ButtonLeft onClick={props.remover}>Remover</ButtonLeft> : <ButtonLeft onClick={props.adicionar}>adicionar..</ButtonLeft>}
                <ButtonRight onClick={props.detalhes}>ver detal..</ButtonRight>
            </DivButtons>
        </DivCard>
    )
}