import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(100);
  useEffect(() => {
    console.log("counting" + count);
  }, []);

  return (
    <div>
      <h1>count is ={count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Decrement is ={value}</h1>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </div>
  );
}

export default App;
