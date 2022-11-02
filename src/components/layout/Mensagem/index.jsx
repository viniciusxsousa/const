import { useState, useEffect } from 'react'

import { Msg } from './styles'

function Mensagem({text, type}) {

    const [visibilidade, setVisibilidade] = useState(false)

    useEffect(() => {

        if(!text){
            setVisibilidade(false);
            return
        }

        setVisibilidade(true);

        const time = setTimeout(() => {
            setVisibilidade(false);
        }, 3000)

        return () => clearTimeout(time);
    }, [text])

    return (
        <>
           {visibilidade && (<Msg type={type}>{text}</Msg>)}
        </>
    )
}

export default Mensagem