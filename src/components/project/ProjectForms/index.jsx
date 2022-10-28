import { Formulario } from "./styles"

import Select from "../../form/Select"
import Input from "../../form/Input"
import SubmitButton from "../../form/SubmitButton"

function ProjectForms() {
    return (
        <Formulario>
            <Input 
                type='text' 
                text='Nome do projeto' 
                name='name' 
                placeholder='Digite o nome do projeto...' 
            />
            <Input 
                type='number' 
                text='Orçamento do projeto' 
                name='budget' 
                placeholder='Infome o orçamento do projeto' 
            />
            <Select 
                name='tipo'
                text='Selecione uma categoria'
            />
            <SubmitButton text='Criar Projeto'/>
        </Formulario>
    )
}

export default ProjectForms