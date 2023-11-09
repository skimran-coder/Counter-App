import { useState } from "react";
import "./App.css";

function App() {

  const [counter, setCounter] = useState(0)
  const [message, setMessage] = useState("")

  function maxLimit() {
   setMessage(<p className="text-[red]">Maximum Limit Reached! <span className="text-[white]">Please Reset.</span></p>)
  }

  function minLimit() {
    setMessage(<span className="text-[red]">Minimum Limit Reached! <span className="text-[white]">Please Reset.</span></span>)
  }

  function incrementHandler() {
    if (counter < 10) {
      setCounter(counter + 1);
      setMessage("")
    } 
    else {
      maxLimit();
    }
  }

  function decrementHandler() {
    if (counter > -10) {
      setCounter(counter - 1);
      setMessage("")
     } 
     else {
      minLimit();
     } 
  }

  function resetHandler() {
    setCounter(0);
    setMessage("");
  }

  return (
    <div className="bg-[#344151] w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-10 font-semibold">
      <p className="text-[#34AEE6] text-md text-2xl">Increment & Decrement</p>

      <div className="flex bg-[#fff] gap-10 justify-center items-center  py-3 text-[#494747]">

        <button className="border-r-2 px-8 text-2xl text-[50px] justify-center items-center" onClick={decrementHandler}>-</button>
        <div className="text-2xl text-[25px] justify-center items-center">{counter}</div>
        <button className="border-l-2 px-8 text-2xl text-[30px] justify-center items-center" onClick={incrementHandler}>+ </button>

      </div>

      <button className="bg-sky-500 text-[#eae5e5] px-4 py-2 hover:bg-sky-700 transition-all duration-150" onClick={resetHandler}>Reset</button>

      {message}
    </div>
  );
}

export default App;
