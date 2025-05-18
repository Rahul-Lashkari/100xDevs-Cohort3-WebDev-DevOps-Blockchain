import { useState } from "react";

import usePrev from "./hooks/usePrev";

function App() {
    const [count, setCount] = useState(0);

    const prev = usePrev(count);

    return (
        <div>
            <p>{count}</p>

            <button onClick={() => setCount(count + 1)}>Increment</button>

            <p>Previous Value: {prev}</p>
        </div>
    );
}

export default App;
