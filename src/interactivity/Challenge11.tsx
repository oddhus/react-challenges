/**
 * Properly call the function pass to the event handler
 */
export default function Challenge11() {
  const handleClick = () => {
    alert("Good job!");
  };
  return (
    <div>
      <button onClick={() => handleClick}>Fix me</button>
      <button onClick={handleClick()}>Fix me</button>
    </div>
  );
}
