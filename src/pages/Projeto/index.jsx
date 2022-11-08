import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { DetalhesConteiner, ProjetoDetalhes } from './styles'

import Conteiner from '../../components/layout/Conteiner'
import Load from '../../components/layout/Loader'

function Projeto() {

    const [projeto, setProjeto] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false)
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

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    return(
        <>
            {projeto.name ? (
                <ProjetoDetalhes>
                    <Conteiner direction='column'>
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
                                <div> 
                                    <p>Detalhes do Projeto</p>
                                </div>
                            )}
                        </DetalhesConteiner>
                    </Conteiner>
                </ProjetoDetalhes>
            ) : (
                <Load/>
            )}
        </>
    )
}

export default Projeto