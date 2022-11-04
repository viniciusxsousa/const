import { useLocation } from "react-router-dom"

import { ConteinerTitle, ConteinerProjeto } from "./styles";

import LinkBotao from "../../components/layout/LinkBotao";
import Conteiner from "../../components/layout/Conteiner";
import Mensagem from "../../components/layout/Mensagem";



function Projetos() {
    
    const location = useLocation();
    let msg = '';

    if(location.state){
        msg = location.state.message;
    }
    
    return(
        <ConteinerProjeto>
            <ConteinerTitle>
                <h1>Projetos</h1>
                <LinkBotao href='/novoprojeto' content='Criar Projeto' />
            </ConteinerTitle>
            {msg && (<Mensagem type='sucesso' text={msg}/>)}
            <Conteiner justify='start'>
                <p>Projeto...</p>
            </Conteiner>
        </ConteinerProjeto>
    )
}

export default Projetos