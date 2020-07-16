import { useState } from "react";

export const useForm = ( initialState = {}) => {

    // menejar el estado de nuestro formulario
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }


    return [ values, handleInputChange ];
}



// declaro inisitalState como  {} : para evitar errores

