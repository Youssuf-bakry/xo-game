function GameOver({ winner, handleRematch }) {
  return (
    <div id="game-over">
      {!winner && <p>It's a draw</p>}
      {winner && <p>{winner} wins 🎉</p>}
      <button onClick={handleRematch}>Rematch</button>
    </div>
  );
}

export default GameOver;
