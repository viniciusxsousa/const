import styled from "styled-components";

export const Footer = styled.footer`
    background-color: #222;
    width: 100%;
    padding: 3em;
    text-align: center;
    color: #fff;
`

export const SocialList = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: center;

    svg {
        font-size: 25px;
        color: #fff;
        margin: 0 0.2em;
    }

    svg:hover {
        color: #ffbb33;
    }
`

export const Copyright = styled.p`
    font-weight: bold;

    span {
        color: #ffbb33;
    }
` 