import { useState } from "react";

import usePrev from "./hooks/usePrev";

function CustomUsePrevious() {
  const [count, setCount] = useState(0);

  const prev = usePrev(count);

  return (
      <div>
            <h1>Custom usePrevious Hook</h1>

          <p>Current Value: {count}</p>

          <p>Previous Value: {prev}</p>

          <button onClick={() => setCount(count + 1)}>Increment</button>

          <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
  );
}

export default CustomUsePrevious;