import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
// uso de custom hook , este deberia encargarse de limpiar los campos 
const [{ description }, handleInputChange, reset] = useForm({
    // tendremos un objeto que tendra la llave de la description , lo vamos asociar con el description del inpit (deben tener el mismo nombre )
    description: ''
});

const handleSubmit = (e) =>{
    e.preventDefault();

    if (description.trim().length <= 1) {
        return;
    }

    const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false
    };


    handleAddTodo( newTodo );
    reset();

}


    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={ description }
                    onChange={ handleInputChange }
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                        </button>
            </form>
        </>
    )
}

