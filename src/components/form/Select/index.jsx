import { Conteiner } from './styles'

function Select({text, name, option, handleOnChange, value}) {
    return (
        <Conteiner>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione um valor...</option>
            </select>
        </Conteiner>
    )
}

export default Select