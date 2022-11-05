import styled from "styled-components";

export const Card = styled.div`
    padding: 1em;
    border: 1px solid #7a7a7a;
    border-radius: 5px;
    width: 24%;
    margin: 0.5%;

    h4 {
        background-color: #222;
        color: #ffbb33;
        padding: 0.4em;
        margin-bottom: 1.3em;
        font-size: 1.3em;
    }

    p {
        color: #7a7a7a;
        margin-bottom: 1em;
    }

    p span {
        font-weight: bold;
    }
`

export const CategoryText = styled.p`
    display: flex;
    align-items: center;

    span {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #fff;
        margin-right: 5px;
    }
`

export const Acoes = styled.div`
    margin-top: 1.2em;
    display: flex;
    align-items: center;

    a, button {
        
    }
`