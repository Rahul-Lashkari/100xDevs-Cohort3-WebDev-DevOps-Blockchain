import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

import { counterAtom } from "./store/atoms/counter";

function App() {
    return (
        <RecoilRoot>
            <Counter />
        </RecoilRoot>
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
    const count = useRecoilValue(counterAtom);

    return (
        <h2>{count}</h2>
    );
}

function Decrease() {
    const setCount = useSetRecoilState(counterAtom);

    function decrease() {
        setCount(count => count - 1);
    }
    
    return (
        <button onClick={decrease}>Decrease</button>
    );
}

function Incrase() {
    const setCount = useSetRecoilState(counterAtom);

    function increase() {
        setCount(count => count + 1);
    }
    
    return (
        <button onClick={increase}>Increase</button>
    );
}

export default App;
