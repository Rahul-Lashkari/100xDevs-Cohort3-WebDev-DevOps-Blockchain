import  { useRef, useEffect } from 'react';

function usePrev(value) {
    const ref = useRef();  

    useEffect(() => {
        ref.current = value;         
    }, [value]);  

    return ref.current;
}


export default usePrev;
