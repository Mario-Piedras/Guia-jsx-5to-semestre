import {useState} from "react";

const Items = ({nombre, visto}) => {
    return (
        <li className="banco">{nombre} {visto ? '✅':'❌'}</li>
    )
}

export const ListadoApp = () => {
    const addTask = () => {
        setArreglo( [...arreglo, {nombre: 'Tarea nueva', visto: false}] )
    }
    let listadoSecciones = [
        {nombre: 'Instalaciones necesarias', visto: true},
        {nombre: 'Uso de Vite', visto: true},
        {nombre: 'Componentes', visto: true},
        {nombre: 'Variables en JSX', visto: true},
        {nombre: 'Props', visto: true},
        {nombre: 'Eventos', visto: true},
        {nombre: 'useState', visto: true},
        {nombre: 'Redux', visto: false},
        {nombre: 'costomHooks', visto: false},
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)

    return (
        <>
        <h1>Listado de temas del curso</h1>
            <ol>
                {arreglo.map( (item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>))}
                {/* En el mapeo se utiliza key si el nombre es único */}
            </ol>
            <button onClick={() => addTask()}>AgregarTarea</button>
        </>
    )
}