import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"

import { ConteinerTitle, ConteinerProjeto } from "./styles";

import ProjectCard from "../../components/project/ProjectCard";
import LinkBotao from "../../components/layout/LinkBotao";
import Conteiner from "../../components/layout/Conteiner";
import Mensagem from "../../components/layout/Mensagem";
import Loader from "../../components/layout/Loader";



function Projetos() {

    const [ projetos, setProjetos ] = useState([]);
    const [ removeLoad, setRemoveLoad ] = useState(false);
    const [ mensagemRemocao, setMensagemRemocao] = useState('');

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProjetos(data);
            setRemoveLoad(true);
        })
        .catch((error) => console.log(error))
        }, 300)
    }, []);
    
    const location = useLocation();
    let msg = '';

    if(location.state){
        msg = location.state.message;
    }

    function removerProjeto(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((reps) => reps.json())
        .then(() => {
            setProjetos(projetos.filter((projeto) => projeto.id !== id));
            setMensagemRemocao('Projeto removido com sucesso!');
        })
        .catch((erro) => console.log(erro))
    }
    
    return(
        <ConteinerProjeto>
            <ConteinerTitle>
                <h1>Projetos</h1>
                <LinkBotao href='/novoprojeto' content='Criar Projeto' />
            </ConteinerTitle>
            {msg && (<Mensagem type='sucesso' text={msg}/>)}
            {mensagemRemocao && (<Mensagem type='sucesso' text={mensagemRemocao}/>)}
            <Conteiner justify='start'>
                {projetos.length > 0 && 
                    projetos.map( (projeto) => (
                        <ProjectCard 
                            id={projeto.id}
                            key={projeto.id}
                            name={projeto.name}
                            budget={projeto.budget}
                            category={projeto?.category?.name}
                            handleRemove={removerProjeto}
                        />
                    ))
                }
                {!removeLoad && <Loader/>}
                {removeLoad && projetos.length === 0 && (
                    <p>Não há projetos cadastrados.</p>
                )}
            </Conteiner>
        </ConteinerProjeto>
    )
}

export default Projetos