import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  function handleAddition() {
    setCounter((current) => current + 1);
  }
  function handleSubtraction() {
    setCounter((current) => current - 1);
  }
  return (
    <div className="flex flex-row items-center justify-between max-w-sm mx-auto p-4">
      <button
        onClick={handleSubtraction}
        className="p-2 bg-slate-400 rounded-xl"
      >
        -
      </button>
      <span className="text-3xl">{counter}</span>
      <button onClick={handleAddition} className="p-2 bg-slate-400 rounded-xl">
        +
      </button>
    </div>
  );
}

export default App;
