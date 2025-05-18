import  { useRef, useEffect } from 'react';

function usePrev(value) {
    const ref = useRef();

    console.log("Re-render with new value", value);    

    useEffect(() => {
        ref.current = value; 

        console.log("Updated the ref.current", ref.current);
        
    }, [value]);  

    console.log("Current ref.current", ref.current); 

    return ref.current;
}


export default usePrev;
