import { Card, Acoes } from '../ProjectCard/styles'

import { BsFillTrashFill } from 'react-icons/bs'

function ServiceCard({ name, descricao, custo, id, handleRemove }) {

    const remover = (e) => {
        e.preventDefault();
        handleRemove(id, custo)
    }
    
    return(
        <Card>
            <h4>{name}</h4>
            <p><span>Custo total:</span> R${custo}</p>
            <p>{descricao}</p>
            <Acoes>
                <button onClick={remover}>
                    <BsFillTrashFill/>
                    Excluir
                </button>
            </Acoes>
        </Card>
    ) 
}

export default ServiceCard