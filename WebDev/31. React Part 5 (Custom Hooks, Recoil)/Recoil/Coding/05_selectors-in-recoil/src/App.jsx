import { counterAtom, evenSelector } from "./store/counter";

import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

function App() {
    return (
        <div>
            <RecoilRoot>
                <Buttons /> 
                <Counter /> 
                <IsEven /> 
            </RecoilRoot>
        </div>
    );
}

function Buttons() {
    const setCount = useSetRecoilState(counterAtom);

    function increase() {
        setCount((c) => c + 2); 
    }

    function decrease() {
        setCount((c) => c - 1); 
    }

    return (
        <div>
            <button onClick={increase}>Increase</button>
           
            <button onClick={decrease}>Decrease</button>
        </div>
    );
}

function Counter() {
    const count = useRecoilValue(counterAtom);

    return (
        <div>
            <h2>Count: {count}</h2> 
        </div>
    );
}

function IsEven() {
    const isEven = useRecoilValue(evenSelector);

    return (
        <div>
            <h3>Is Even: {isEven ? "Yes" : "No"}</h3>
        </div>
    );
}

export default App;
