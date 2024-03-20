import React, { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(10);

  const AddValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const RemoveValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="w-screen p-4 ">
      <h1 className="text-3xl font-bold text-center text-white">Counter</h1>
      <h5 className="mt-3 text-center text-white">
        Max Value: 20 | Min Value: 0
      </h5>
      <h3 className="mt-3 text-2xl text-center text-white">
        Counter Value: {counter}
      </h3>
      <div className="mt-2 text-center">
        <button
          onClick={AddValue}
          type="button"
          className="text-white bg-blue-500 border border-white border-solid rounded-none hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Value
        </button>
        &nbsp; &nbsp;
        <button
          onClick={RemoveValue}
          type="button"
          className="text-white bg-blue-500 border border-white border-solid rounded-none hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Remove Value
        </button>
      </div>
    </div>
  );
}
