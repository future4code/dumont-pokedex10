
import {DivCard, DivButtons, Buttons, CardTitle } from './styledPokeCard'
import {useHistory} from 'react-router-dom';

export default function PokeCard (props) {

    const history = useHistory()
    
    return (
        <DivCard>
            <CardTitle src={props.img}></CardTitle>
            <DivButtons>
                
                {history.location.pathname === '/pokedex' ? <Buttons onClick = {props.remover}>remover pokemon</Buttons> : <Buttons onClick={props.adicionar}>adicionar pokemon</Buttons>} 
                <Buttons onClick={props.detalhes}>ver detalhes</Buttons>
                
            </DivButtons>
        </DivCard>
    )
}