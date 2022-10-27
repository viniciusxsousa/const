import { ContainerHome } from './styles' 

import LinkBotao from '../../components/layout/LinkBotao'

import savings from '../../img/savings.svg'

function Home(){
    return(
        <ContainerHome>
            <h1>Bem-vindo ao <span>conts</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkBotao href='/novoprojeto' content='Criar projeto'/>
            <img src={savings} alt="costs" />
        </ContainerHome>
    )
}

export default Home