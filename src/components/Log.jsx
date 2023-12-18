import React from "react";

function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, i) => (
        <li key={i}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}

export default Log;
