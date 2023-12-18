import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./Winning-Combinations";
import GameOver from "./components/GameOver";

const initalBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function deriveAcivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  // const [symbol, SetSymbol] = useState("X");
  const [players, setPlayers] = useState({ X: "player 1", Y: "player 2" });
  const [gameTurns, setGameTurns] = useState([]);
  let currentPlayer = deriveAcivePlayer(gameTurns);
  function handleRematch() {
    setGameTurns([]);
  }
  let gameBoard = [...initalBoard.map((arr) => [...arr])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  console.log(gameBoard);
  let winner;

  for (const comb of WINNING_COMBINATIONS) {
    let first = gameBoard[comb[0].row][comb[0].column];
    let second = gameBoard[comb[1].row][comb[1].column];
    let third = gameBoard[comb[2].row][comb[2].column];
    if (first && first === second && first === third) {
      winner = players[first];
    }
  }
  const hasDraw = !winner && gameTurns.length === 9;
  function switchSymbol(row, col) {
    setGameTurns((prev) => {
      let currentPlayer = deriveAcivePlayer(prev);
      let updatedTurns = [
        { player: currentPlayer, square: { row, col } },
        ...prev,
      ];
      return updatedTurns;
    });
  }

  function handleChangeName(symbol, newName) {
    setPlayers((prev) => {
      return { ...prev, [symbol]: newName };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={players.X}
            onChangeName={handleChangeName}
            symbol="X"
            isActive={currentPlayer === "X" ? true : false}
          />
          <Player
            initialName={players.Y}
            onChangeName={handleChangeName}
            symbol="O"
            isActive={currentPlayer === "O" ? true : false}
          />
        </ol>
        <GameBoard onClickSquare={switchSymbol} board={gameBoard} />
        {(winner || hasDraw) && (
          <GameOver winner={winner} handleRematch={handleRematch} />
        )}
        <Log turns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
