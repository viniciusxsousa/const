import { Link } from "react-router-dom";

import { Btn } from './styles'

function LinkBotao({href, content}) {
    return (
        <Btn>
            <Link to={href}>
                {content}
            </Link>
        </Btn>
    )
}

export default LinkBotao