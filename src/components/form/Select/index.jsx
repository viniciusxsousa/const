import { Conteiner } from './styles'

function Select({text, name, option, handleOnChange, value}) {
    return (
        <Conteiner>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                {option.map((elemento) => (
                    <option value={elemento.id} key={elemento.id}>{elemento.name}</option>
                ))}
            </select>
        </Conteiner>
    )
}

export default Select