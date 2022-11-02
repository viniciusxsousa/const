import { useState, useEffect } from 'react'

import { Formulario } from "./styles"

import SubmitButton from "../../form/SubmitButton"
import Select from "../../form/Select"
import Input from "../../form/Input"

function ProjectForms({handleSubmit, projectData}) {

    const [category, setCategory] = useState([]);
    const [projeto, setProjeto] = useState(projectData || {});

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

    const submit = (e) => {
        e.preventDefault(); 
        handleSubmit(projeto);
    }

    function handleChange(e) {
        setProjeto({...projeto, [e.target.name]: e.target.value});
    }

    function handleCategory(e) {
        setProjeto({...projeto, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }})
    }
    
    return (
        <Formulario onSubmit={submit}>
            <Input 
                type='text' 
                text='Nome do projeto' 
                name='name' 
                placeholder='Digite o nome do projeto...' 
                handleOnChange={handleChange}
                value={projeto.name ? projeto.name : ''} 
            />
            <Input 
                type='number' 
                text='Orçamento do projeto' 
                name='budget' 
                placeholder='Infome o orçamento do projeto' 
                handleOnChange={handleChange}
                value={projeto.budget ? projeto.budget : ''}
            />
            <Select 
                name='tipo'
                text='Selecione uma categoria'
                option={category}
                handleOnChange={handleCategory}
                value={projeto.category ? projeto.category.id : ''}
            />
            <SubmitButton text='Criar Projeto'/>
        </Formulario>
    )
}

export default ProjectForms