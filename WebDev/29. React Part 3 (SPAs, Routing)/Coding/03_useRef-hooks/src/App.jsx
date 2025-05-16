import { useState, useRef } from "react";

function App() {
    return (
        <div>
            <FocusInput />
            <hr />

            <Stopwatch />
        </div>
    );
}

function FocusInput() {
    const inputRef = useRef(null);

    function focusOnInput() {

        inputRef.current.focus();
    }

    return (
        <div>
            <h2>Focus Input</h2>

            <input type="text" id="name" ref={inputRef} />

            <button onClick={focusOnInput}>Submit</button>
        </div>
    );
}

function Stopwatch() {
    const [currentCount, setCurrentCount] = useState(0);

    const timer = useRef(null);

    function startClock() {
        let value = setInterval(() => {
            setCurrentCount((count) => count + 1);
        }, 1000);

        timer.current = value;
    }

    function stopClock() {
        console.log(timer);

        clearInterval(timer.current);
    }

    return (
        <div>
            <h1>Stopwatch</h1>

            {currentCount}
            <br />

            <button onClick={startClock}>Start</button>
            <button onClick={stopClock}>Stop</button>
        </div>
    );
}

export default App;
