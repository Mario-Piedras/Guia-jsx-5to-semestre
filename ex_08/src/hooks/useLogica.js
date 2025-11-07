import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    //Nuevo método para limpiar un campo especifico
    const resetField = (field) => {
        setFormState({...formState, [field]: ''})
    }

    //Método para resetear el formulario de registro en login
    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formState, //para poder usar tarea directamente
        formState,
        onInputChange,
        resetField,
        onResetForm
    }
}