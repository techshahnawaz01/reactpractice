import React, { useState } from "react";

export default function Bgchanger() {
  const [color, setColor] = useState("#ff0000");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div
      className="flex justify-center w-screen h-screen transition duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="absolute shadow-2xl top-96">
        <label htmlFor="color">
          <h className="p-2 text-xl text-white bg-blue-600">
            <b>choose color to change the background color</b>
          </h>
        </label>
        <br />
        <input
          type="color"
          value={color}
          onChange={handleChange}
          className="w-full mt-4 shadow-2xl outline-none h-14 rounded-0"
        />
        <input
          type="text"
          readOnly
          value={color}
          onChange={handleChange}
          className="w-full h-10 mt-4 shadow-2xl outline-none"
        />
      </div>
    </div>
  );
}
