import { useState } from "react";

/**
 * Why is the score and the score copy different when incrementing? Suggest a fix
 */
export default function Challenge15() {
  const [score, setScore] = useState(0);
  const [scoreCopy, setScoreCopy] = useState(0);

  function increment() {
    setScore(score + 1);
    setScoreCopy(score);
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <h1>Actual score: {score}</h1>
      <h1>Copied score {scoreCopy}</h1>
    </>
  );
}
