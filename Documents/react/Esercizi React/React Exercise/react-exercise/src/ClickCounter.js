import React, { useState } from "react";

export function ClickCounter({ initialValue = 0, incrementBy = 1 }) {
  const [count, setCount] = useState(initialValue);

  const handleCounterIncrement = (event) => {
    console.log(event);
    setCount((prevCount) => prevCount + incrementBy);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleCounterIncrement}>Increment</button>
    </div>
  );
}


