import { Card, CategoryText, Acoes } from './styles'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function ProjectCard({ id, name, budget, category, handleRemove }) {

    function remover(e) {
        e.preventDefault();
        handleRemove(id);
    }

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
                <Link to={`/projeto/${id}`}>
                    <BsPencil/> Editar
                </Link>
                <button onClick={remover} >
                    <BsFillTrashFill/> Remover
                </button>
            </Acoes>
        </Card>
    )
}

export default ProjectCard