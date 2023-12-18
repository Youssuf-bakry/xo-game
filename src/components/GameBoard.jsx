function GameBoard({ onClickSquare, board }) {
  // let gameBoard = initalBoard;
  // for (const turn of turns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;
  //   gameBoard[row][col] = player;
  // }
  // const [gameBoard, setGameBoard] = useState(initalBoard);

  // function handleClick(row, col) {
  //   setGameBoard((old) => {
  //     let gameBoardCopy = [...old.map((row) => [...row])];
  //     gameBoardCopy[row][col] = activePlayerSymbol;
  //     return gameBoardCopy;
  //   })
  //   onClickSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowInd) => (
        <li key={rowInd}>
          <ol>
            {row.map((playerSymbol, colInd) => {
              return (
                <li key={colInd}>
                  <button
                    onClick={() => onClickSquare(rowInd, colInd)}
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
