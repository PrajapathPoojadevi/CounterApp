import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>Count = {count} </h1>
      <div className="btncont">
        <button onClick={() => setCount(count + 1)}>Increament</button>
        <button onClick={() => setCount(count - 1)}>Decreament</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
export default App;
