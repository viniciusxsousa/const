import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Projeto() {

    const { id } = useParams();
    const [projeto, setProjeto] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => setProjeto(data))
        .catch((error) => console.log(error));
    }, [id])

    return(
        <div>
            <p>{projeto.name}</p>
        </div>
    )
}

export default Projeto