import styled from "styled-components";

export const ProjetoDetalhes = styled.div`
    padding: 2em;

    h1, h2, p {
        margin-bottom: 0.5em;
    }

    h1 {
        background-color: #222;
        color: #ffbb33;
        padding: 0.4em;
    }

    span{
        font-weight: bold;
    }
`

export const DetalhesConteiner = styled.div`
    border-bottom: 1px solid #7a7a7a;
    margin-bottom: 1.2em;
    padding-bottom: 1.2em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    div {
        width: 100%;
    }

    button {
        text-decoration: none;
        background-color: #222;
        color: #fff;
        padding: 0.5em 1em;
        transition: .5s;
        max-height: 40px;
        cursor: pointer;
    }

    button:hover{
        color: #ffbb33;
    }
`