import { Card, CategoryText, Acoes } from './styles'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

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
            <Acoes>
                <Link to='/'>
                    <BsPencil/> Editar
                </Link>
                <button>
                    <BsFillTrashFill/> Remover
                </button>
            </Acoes>
        </Card>
    )
}

export default ProjectCard