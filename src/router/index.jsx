import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NovoProjeto from '../pages/NovoProjeto';
import Contato from '../pages/Contato';
import Empresa from '../pages/Empresa';
import Home from '../pages/Home';

import Conteiner from '../components/layout/Conteiner';
import Cabecalho from '../components/layout/Cabecalho';

function Router(){
    return(
        <BrowserRouter>
            <Cabecalho/>
            <Conteiner altura='min'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/contato' element={<Contato/>}/>
                    <Route path='/empresa' element={<Empresa/>}/>
                    <Route path='/novoprojeto' element={<NovoProjeto/>}/>
                </Routes>
            </Conteiner>

        </BrowserRouter>
    )
}

export default Router