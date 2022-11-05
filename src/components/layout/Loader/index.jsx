import load from '../../../img/loading.svg'

import { LoadContainer } from './styles'

function Loader() {
    return (
        <LoadContainer>
            <img src={load} alt="carregando" />
        </LoadContainer>
    )
}

export default Loader