import { useState, useEffect } from 'react'

import { Formulario } from "./styles"

import SubmitButton from "../../form/SubmitButton"
import Select from "../../form/Select"
import Input from "../../form/Input"

function ProjectForms() {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category', {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => setCategory(data))
        .catch((erro) => console.log(erro))
    }, [])

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
                option={category}
            />
            <SubmitButton text='Criar Projeto'/>
        </Formulario>
    )
}

export default ProjectForms