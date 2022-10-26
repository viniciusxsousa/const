import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NovoProjeto from '../pages/NovoProjeto';
import Projetos from '../pages/Projetos';
import Contato from '../pages/Contato';
import Empresa from '../pages/Empresa';
import Home from '../pages/Home';

import Conteiner from '../components/layout/Conteiner';
import Cabecalho from '../components/layout/Cabecalho';
import Rodape from '../components/layout/Rodape';

function Router(){
    return(
        <BrowserRouter>
            <Cabecalho/>
            <Conteiner altura='min'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/contato' element={<Contato/>}/>
                    <Route path='/empresa' element={<Empresa/>}/>
                    <Route path='/projetos' element={<Projetos/>}/>
                    <Route path='/novoprojeto' element={<NovoProjeto/>}/>
                </Routes>
            </Conteiner>
            <Rodape/>
        </BrowserRouter>
    )
}

export default Router