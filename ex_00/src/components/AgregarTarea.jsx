import {useState} from 'react'

export const AgregarTarea = ({agregarTarea}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        agregarTarea( (arreglo) => [...arreglo, {nombre: inputValue, visto: false}])
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" 
                placeholder='Ingrese una tarea'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}