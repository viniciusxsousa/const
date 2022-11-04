import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"

import { ConteinerTitle, ConteinerProjeto } from "./styles";

import ProjectCard from "../../components/project/ProjectCard";
import LinkBotao from "../../components/layout/LinkBotao";
import Conteiner from "../../components/layout/Conteiner";
import Mensagem from "../../components/layout/Mensagem";



function Projetos() {

    const [ projetos, setProjetos ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setProjetos(data)
        })
        .catch((error) => console.log(error))
    }, []);
    
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
                {projetos.length > 0 && 
                    projetos.map( (projeto) => (
                        <ProjectCard 
                            id={projeto.id}
                            key={projeto.id}
                            name={projeto.name}
                            budget={projeto.budget}
                            category={projeto?.category?.name}
                        />
                    ))
                }
            </Conteiner>
        </ConteinerProjeto>
    )
}

export default Projetos