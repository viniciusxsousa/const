import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    label {
        font-weight: bold;
        margin-bottom: 0.6em;
    }

    input {
        padding: 0.7em;
        border-radius: 0;
        border: none;
    }

    input::placeholder {
        color: #7b7b7b
    }
`