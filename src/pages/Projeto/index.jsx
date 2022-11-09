import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { parse, v4 as uuidv4} from 'uuid'

import { DetalhesConteiner, ProjetoDetalhes } from './styles'

import ProjectForms from '../../components/project/ProjectForms'
import ServiceForms from '../../components/project/ServiceForms'
import Conteiner from '../../components/layout/Conteiner'
import Mensagem from '../../components/layout/Mensagem'
import Load from '../../components/layout/Loader'

function Projeto() {

    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setServiceForm] = useState(false);
    const [mensagem, setMensagem] = useState();
    const [projeto, setProjeto] = useState([]);
    const [type, setType] = useState();
    const { id } = useParams();


    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => setProjeto(data))
        .catch((error) => console.log(error));
        }, 300)
    }, [id])

    function editarProjeto(projeto) {
        setMensagem('')
        
        if(projeto.budget < projeto.custo) {
            setMensagem('O valor do serviço não pode ser maior que o orçamento!');
            setType('error');
            return false
        }

        fetch(`http://localhost:5000/projects/${projeto.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(projeto),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProjeto(data);
            setShowProjectForm(false);
            setMensagem('Projeto atualizado com sucesso!');
            setType('sucesso');
        })
        .catch((error) => console.log(error))
    }

    function criarServico(projeto) {

        const ultimoServico = projeto.servico[projeto.servico.length - 1];

        ultimoServico.id = uuidv4();

        const ultimoServicoCusto = ultimoServico.custo;

        const novoCusto = parseFloat(projeto.custo) + parseFloat(ultimoServicoCusto);

        if(novoCusto > parseFloat(projeto.custo)){
            console.log('Entrou');
            setMensagem('O valor do serviço é maior que o orçamento do projeto.');
            setType('error');
            projeto.servico.pop();
            return false;
        }

    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    function toggleServiceForms() {
        setServiceForm(!showServiceForm);
    }

    return(
        <>
            {projeto.name ? (
                <ProjetoDetalhes>
                    <Conteiner direction='column'>
                        {mensagem && <Mensagem type={type} text={mensagem}/>}
                        <DetalhesConteiner>
                            <h1>Projeto: {projeto.name}</h1>
                            <button onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div> 
                                    <p><span>Categoria:</span> {projeto.category.name}</p>
                                    <p><span>Total de Orçamento:</span> R${projeto.budget}</p>
                                    <p><span>Total Utilizado:</span> R${projeto.custo}</p>
                                </div>
                            ): (
                               <ProjectForms 
                                handleSubmit={editarProjeto} 
                                projectData={projeto} 
                                text='Salvar Edição'/>
                            )}
                        </DetalhesConteiner>
                        <DetalhesConteiner>
                            <h2>Adiconar Serviço</h2>
                            <button onClick={toggleServiceForms}>
                                {!showServiceForm ? 'Adicionar' : 'Fechar'}
                            </button>
                            <div>
                                {showServiceForm && (
                                   <ServiceForms 
                                        textBtn='Adicionar' 
                                        handleSubmit={criarServico} 
                                        projectData={projeto}
                                    />
                                )}
                            </div>
                        </DetalhesConteiner>
                        <h2>Serviços</h2>
                        <Conteiner justify='start'>
                            <p>Detalhes do Serviço</p>
                        </Conteiner>
                    </Conteiner>
                </ProjetoDetalhes>
            ) : (
                <Load/>
            )}
        </>
    )
}

export default Projeto