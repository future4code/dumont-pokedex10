import styled from 'styled-components'

const DivContainerImage = styled.div `
    display: flex;
    margin: auto;
    
    flex-direction: column;
    height: 600px;
    width: 350px;
    justify-content: space-between;
    align-items: center;

`
const DivPokeImage = styled.div `
    height: 250px;
    width: 300px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function PokeImage () {
    return (
        <DivContainerImage>
            <DivPokeImage>
                <image>image</image>
            </DivPokeImage>
            <DivPokeImage>
                <image>image</image>
            </DivPokeImage>
        </DivContainerImage>

    )
}