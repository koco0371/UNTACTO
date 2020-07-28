import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
};

let dataLetters = {
  data: {
    columns: [
      ["German", 30, 20, 50, 200, 60, 50],
      ["English", 200, 150, 15, 20, 130, 220],
      ["Chinese", 300, 33, 160, 110, 250, 250],
    ],
    type: "line",
  },
  x: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
};

const App = () => (
  <div style={styles}>
    <Hello data={dataLetters.data} />
  </div>
);

render(<App />, document.getElementById("root"));
