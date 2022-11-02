import styled from "styled-components";

export const Msg = styled.p`
    width: 100%;
    padding: 1em;
    border: 1px solid #000;
    margin: 0 auto;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 2em;
    margin-top: 1em;

    color: ${(props) => (props.type === 'sucesso' ? '#155724' : '#721c24')};
    background-color: ${(props) => (props.type === 'sucesso' ? '#d4edda' : '#f8d7da')};
    border-color: ${(props) => (props.type === 'sucesso' ? '#c3e6cb' : '#f5c6cb')};
`