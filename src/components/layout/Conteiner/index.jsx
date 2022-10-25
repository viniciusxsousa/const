import { DivAux } from './styles'

function Conteiner({children, altura, justify, direction}){
    return(
        /* Props da DivAux:
        altura    - for igual a min, a min-height vai receber  75vh se não recebe 0;
        justify   - for igual a start, justify-content vai receber flex-start se não recebe space between;
        direction - for igual a column, o flex-direction vai receber column se não recebe row 
        */
        <DivAux altura={altura} justify={justify} direction={direction} >{children}</DivAux>
    )
}

export default Conteiner