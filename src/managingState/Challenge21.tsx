import { useState } from "react";

/**
 * Simplify this component by reducing the number of useState hooks. How many useState hooks
 * do you actually need? Are there other improvements to be made? (For example: how can we adapt it to support n players)
 */
export default function Challenge21() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const handlePlayer1ScoreChange = () => {
    setPlayer1Score((score) => score + 1);
    setTotalScore((total) => total + 1);
  };

  const handlePlayer2ScoreChange = () => {
    setPlayer2Score((score) => score + 1);
    setTotalScore((total) => total + 1);
  };

  return (
    <>
      <div>
        Player 1: {player1Score}
        <button onClick={handlePlayer1ScoreChange}>+1</button>
      </div>
      <div>
        Player 2: {player2Score}
        <button onClick={handlePlayer2ScoreChange}>+1</button>
      </div>
      <div>Total score: {totalScore}</div>
    </>
  );
}
