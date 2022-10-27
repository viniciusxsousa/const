import { ConteinerNovoProjeto } from './styles'

import ProjectForms from '../../components/project/ProjectForms'

function NovoProjeto(){
    return(
        <ConteinerNovoProjeto>
            <h1>Criar Projeto</h1>
            <p>Crie seus projetos para depois adicionar os serviços.</p>
           <ProjectForms/>
        </ConteinerNovoProjeto>
    )
}

export default NovoProjeto