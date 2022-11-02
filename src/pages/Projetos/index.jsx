import { useLocation } from "react-router-dom"

import Mensagem from "../../components/layout/Mensagem"

function Projetos() {
    
    const location = useLocation();
    let msg = '';

    if(location.state){
        msg = location.state.message;
    }
    
    return(
        <div>
            <h1>Projetos</h1>
            {msg && (<Mensagem type='sucesso' text={msg}/>)}
        </div>
    )
}

export default Projetos