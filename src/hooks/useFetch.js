import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {

    // por defecto cuando este se llama el componente, efectivamente está montado
    const isMounted = useRef(true);

    const [state, setstate] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        // cuando se desmonte

        return () => {
            isMounted.current = false;
        }

    }, [])
    useEffect(() => {

        // crear un nuevo estado
        setstate({ data: null, loading: true, error: null });


        // Quiero se ejecuta solamente cuando el url cambia
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                // Prevenimos comportamiento del demontado con el state
                if (isMounted.current) {
                    // Todavia está montado    
                    setstate({
                        loading: false,
                        error: null,
                        data
                    })
                } else {
                    console.log('setState no se llamó')
                }

            })
            .catch(()=>{
                setstate({
                    data:null,
                    loading:false,
                    error:'No se pudo cargar la info'
                })
            })
    }, [url])

    return state;

}
