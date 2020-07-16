import React, { useLayoutEffect, useRef, useState } from 'react'
import './effects.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const LayoutEffect = () => {


    const {counter,increment} = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    // si trae data extrae la data en la posición 0
    const { quote } = !!data && data[0];
   
    // Mantener la referencia

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        
        console.log(pTag.current.getBoundingClientRect());

        setBoxSize(pTag.current.getBoundingClientRect());

    }, [quote])


    return (
        <div>
            <h1>LayoutEffects !!!!!</h1>
            <hr />


            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={ pTag } 
                >{ quote }</p>
                </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>


            <button
                className="btn btn-primary"
                onClick={ increment }
            > Siguiente frase
            
            </button>


        </div>
    )
}

// Luego que se renderize layoutEffects : puedo sacar mediciones de como quedaron divs o diferentes componentes
// osea los tamaños o ejecutar odigo cuando se rederiza html