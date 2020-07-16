import React, { useState, useCallback } from 'react'

import './effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () =>{
    //     setCounter( counter + 1 );
    // }

    const increment = useCallback( (num)=>{
        setCounter(c => c + num);
     },[setCounter])

    return (
        <div>
            <h1>useCallbackHook : { counter }  </h1>
            <hr />

            {/* <button 
                className="btn btn-dark"
            >
                + 1 
            </button> */}

            <hr />

            <ShowIncrement increment={ increment } />
        </div>
    )
}


/**
* useCallback :  regresa una versión memorizada de esa función que va servir para mandarla como argumento en otros lugares
* y react que la función no ha cambiado si la dependencia no ha cambiado
*
* este caso es cuando tenemos que mandar una función y el componente está memorizado y  si no lo mandamos con el useCallback
* el componente siempre se va estar generando ya que  crea una nueva versión de renderizado de mi componente padre
*
* otro uso común es cuando utilizamos useEffect tambien es recomendado que se utilice
*

*
*
*
*
/**
 * 
 */



