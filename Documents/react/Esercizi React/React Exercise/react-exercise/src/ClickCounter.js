import React, { useState, useEffect } from "react";

export function ClickCounter({ initialValue = 0, incrementBy = 1, onCounterChange }) {
  const [count, setCount] = useState(initialValue);

  const handleCounterIncrement = () => {
    setCount((prevCount) => prevCount + incrementBy);
  };

  useEffect(() => {
    onCounterChange(count);
  }, [count, onCounterChange]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleCounterIncrement}>Increment</button>
    </div>
  );
}
