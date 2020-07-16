import React, { useRef } from 'react'
import './effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();


    const handleClick = () => {
        // dispara foco al primer input
        // document.querySelector('input').select();
        inputRef.current.select();
        console.log(inputRef)
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre"
            />

            <button
                className="btn btn-primary mt-5"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    )
}


// se recomienda utilizar select
// useRef : nos permite dar una refencia mutable
// podemos cambiar a lo que apunto un ref sin necesidad de disparar una renderización en la parte de react