import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App({ value = 0 }) {
  let [count, setCount] = useState(value);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCount(count - 1);
            console.log(count - 1);
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
            console.log(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
