import { Link } from "react-router-dom"

import Conteiner from "../Conteiner"

import { Header, List, Item } from './styles'
import Logo from '../../../img/costs_logo.png'

function Cabecalho() {

    return(
        <Header>
            <Conteiner >
                <Link to='/'>
                    <img src={Logo} alt="logo do cost"></img>
                </Link>
                <List>
                    <Item><Link to='/'>Home</Link></Item>
                    <Item><Link to='/projetos'>Projetos</Link></Item>
                    <Item><Link to='/contato'>Contato</Link></Item>
                    <Item><Link to='/empresa'>Empresa</Link></Item>
                </List>
            </Conteiner>
        </Header>
    )
}

export default Cabecalho