import { Formulario } from "./styles"

function ProjectForms() {
    return (
        <Formulario>
            <label htmlFor="titulo">Titulo do projeto</label>
            <input type="text" placeholder="Insira o nome do projeto" />
            <label htmlFor="orcamento">Valor para orçamento</label>
            <input type="text" id="orcamento" placeholder="insira o orçamento total" />
            <select name="category_id">
                <option disabled>Selecione uma categoria</option>
            </select>
            <input type="submit" value="Criar projeto" />
        </Formulario>
    )
}

export default ProjectForms