import React, { useState } from 'react'
import { MultipleCuistomHooks } from '../03-examples/MultipleCuistomHooks';

import './effects.css';


export const RealExampleRef = () => {


    // Crearemos un estado que nos sirva para mostrar y ocultar nuestro customhook
    const [show, setShow] = useState(false);


    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultipleCuistomHooks /> }

            <button
                className="btn btn-primary mt-5"
                onClick={ ()=>{
                    setShow( !show );
                }}
            >
                Show/Hide
            </button>
        </div>
    )
}


// Errores comunes , desmontamos componente y luego hacemos el setState

// isMounted : la idea de usar es utilizar este mounted es que mantenga la referencia cuando este está vivo cuando el componente que lo usa sigue montado

// simplemente mantengo la referencia al valor
