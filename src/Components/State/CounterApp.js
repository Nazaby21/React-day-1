import React, { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>counting</h2>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
}
