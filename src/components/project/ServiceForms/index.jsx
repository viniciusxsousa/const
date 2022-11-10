import { useState } from 'react'

import { Formulario } from '../ProjectForms/styles'

import Input from '../../form/Input'
import SubmitButton from '../../form/SubmitButton'

function ServiceForms(props) {

    const [service, setService] = useState({});


    function submit(e) {
        e.preventDefault();
        props.projectData.servico.push(service)
        props.handleSubmit(props.projectData);
    }

    function handleChange(e) {
        setService({...service, [e.target.name]: e.target.value})
    }

    return (
        <Formulario onSubmit={submit}>
            <Input
                type='text'
                name='name'
                text='Nome do serviço'
                placeholder='Insira o nome do serviço'
                handleOnChange={handleChange}
            />
            <Input
                type='number'
                name='custo'
                text='Custo do serviço'
                placeholder='Insira o total do custo'
                handleOnChange={handleChange}
            />
            <Input
                type='text'
                name='descricao'
                text='Descrição do serviço'
                placeholder='Insira a descrição do serviço'
                handleOnChange={handleChange}
            />
            <SubmitButton text={props.textBtn}/>
        </Formulario>
    )
}

export default ServiceForms