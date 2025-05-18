import { useContext } from "react";


import { CountContextProvider, CountContext } from "./CountContextProvider";

function App() {

    return (
        <CountContextProvider>
            <Counter />
        </CountContextProvider>
    );
}

function Counter() {
    return (
        <div>
            <CurrentCount />
            
            <Incrase /> 

            <Decrease /> 
        </div>
    );
}

function CurrentCount() {
    const { count } = useContext(CountContext);

    return (
        <h3>Count: {count}</h3>
    );
}

function Decrease() {
    const { count, setCount } = useContext(CountContext);

    return (
        <button onClick={() => setCount(count - 1)}>Decrease</button>
    );
}

function Incrase() {
    const { count, setCount } = useContext(CountContext);

    return (
        <button onClick={() => setCount(count + 1)}>Increase</button>
    );
}

export default App;
