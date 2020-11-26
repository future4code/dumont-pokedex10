import styled from 'styled-components'


const DivType = styled.div `
    display: flex;
    border: 1px solid black;
    width: 400px;
    justify-content: space-around;

`
export default function PokeType () {
    

    return (
        <DivType>
            <p>Type 1</p>
            <p>Type 2</p>
        </DivType>
    )

}