import React, { useState, useEffect } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
    const intervalId = setInterval(() => {
      console.log("Interval running");
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      console.log("Component unmounted");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
}
