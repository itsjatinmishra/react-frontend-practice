import { useEffect, useState } from "react";

const FunctionalLifecycle = () => {
  const [count, setCount] = useState(0);

  // Mount
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // Update
  useEffect(() => {
    if (count !== 0) {
      console.log("Component Updated");
    }
  }, [count]);

  return (
    <div>
      <h2>Functional Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default FunctionalLifecycle;
