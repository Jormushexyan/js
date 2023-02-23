import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
     <span>{count}</span>
     <div className="buttons">
     <button onClick={() => setCount(count + 1)}>INCREMENT</button>
     <button onClick={() => setCount(count - 1)}>DECREMENT</button>
     </div>
    </div>
  );
}

export default App;
