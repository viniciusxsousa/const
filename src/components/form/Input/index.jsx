import { Conteiner } from './styles'

function Input({type, text, name, placeholder, handleOnChange, value}) {
    return (
        <Conteiner>
            <label htmlFor={name}>{text}</label>
            <input 
                type={type} 
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />
        </Conteiner>
    )
}

export default Input