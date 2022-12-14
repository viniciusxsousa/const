import styled from "styled-components";
import Conteiner from ".";

export const DivAux = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: ${(props) => (props.direction === 'column' ? 'column' : 'row')};
    justify-content: ${(props) => (props.justify === 'start' ? 'flex-start' : 'space-between')};
    margin: 0 auto;
    flex-wrap: wrap;
    min-height: ${(props) => (props.altura === 'min' ? "75vh" : "0vh")};
`