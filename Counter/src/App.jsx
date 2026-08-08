import { useState } from "react"

function App(){

  const [count, setCount] = useState(0);

  return(
    <div className="container">
      <h1>COUNTER</h1>
      <h2>{count}</h2>

    <div className="btns">
      <button className="decrement" onClick={() => setCount(count-1)}>
        Decrement
      </button>
      <button className="reset" onClick={() => setCount(0)}>Reset</button>
      <button className="increment" onClick={() => setCount(count+1)}>Increment</button>

    </div>

    </div>
  );
}

export default App