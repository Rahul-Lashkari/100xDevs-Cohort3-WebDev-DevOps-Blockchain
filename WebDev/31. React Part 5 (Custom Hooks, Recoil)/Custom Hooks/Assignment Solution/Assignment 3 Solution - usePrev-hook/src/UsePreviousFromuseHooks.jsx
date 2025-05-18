import { useState } from "react";

import { usePrevious } from "@uidotdev/usehooks";

function UsePrevious() {
    const [count, setCount] = useState(0);

    const previousValue = usePrevious(count);

    return (
        <div>
            <h1>usePrevious Hook from useHook Library</h1>

            <p>Current Value: {count}</p>
            
            <p>Previous Value: {previousValue}</p>

            <button onClick={() => setCount(count + 1)}>Increment</button>

            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default UsePrevious;
