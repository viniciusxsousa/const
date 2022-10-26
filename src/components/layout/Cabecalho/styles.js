import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    width: 100%;
    background-color: #222;
    padding: 1em;
`
export const List = styled.ul`
    display: flex;
    align-items: center;
    color: #fff;
    list-style-type: none;
    font-weight: bold;
`

export const Item = styled.li`
    margin-right: 1em;
    
    &:hover {
        color: red;
    }

    a {
        color: white;
        text-decoration: none;
    }

`