import { useContext } from "react";

import { CountContextProvider, CountContext } from "./CountContextProvider";

function Parent() {
    return (
        <CountContextProvider>
            <Incrase />
            
            <Decrease />

            <Value />
        </CountContextProvider>
    );
}

function Decrease() {
    const { count, setCount } = useContext(CountContext);

    return (
        <button onClick={() => setCount(count - 1)}>
            Decrease
        </button>
    );
}

function Incrase() {
    const { count, setCount } = useContext(CountContext);

    return (
        <button onClick={() => setCount(count + 1)}>
            Increase
        </button>
    );
}

function Value() {
    const { count } = useContext(CountContext);
    
    return (
        <p>Count: {count}</p>
    );
}

export default Parent;
