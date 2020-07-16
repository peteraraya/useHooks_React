import React from 'react'
import './effects.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCuistomHooks = () => {


    const {counter,increment} = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    // si trae data extrae la data en la posición 0
    const { author, quote } = !!data && data[0];
   


    return (
        <div>
            <h1>BreakingBas Quotes !!!!!</h1>
            <hr />

            {
                loading  // OPERADOR TERNARIO
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{ quote }</p>
                    <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>

                    )
            }


            <button
                className="btn btn-primary"
                onClick={ increment }
            > Siguiente frase
            
            </button>


        </div>
    )
}

// con doble negación transformo ese valor en un boleano
// !null = true   |   !!null = false 