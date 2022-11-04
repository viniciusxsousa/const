import { Card, CategoryText } from './styles'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard({ id, name, budget, category, handleRemove }) {
    return (
        <Card>
            <h4>{name}</h4>
            <p>
                <span>Orçamento: </span> R${budget}
            </p>
            <CategoryText>
                <span></span> {category}
                {console.log(category)}
            </CategoryText>
            <div>
                <p>Editar</p>
                <p>Remover</p>
            </div>
        </Card>
    )
}

export default ProjectCard