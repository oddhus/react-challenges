import { useState } from "react";

/**
 * `handleButtonStateChange` is directly changing the array stored in state. Consequently,
 * the buttons are not updating. Fix the issue
 */
export default function Challenge18() {
  const [activeButtons, setActiveButtons] = useState([false, true, false]);

  function handleButtonStateChange(currentState: boolean, index: number) {
    activeButtons[index] = !currentState;
    setActiveButtons(activeButtons);
  }

  return (
    <>
      {activeButtons.map((isActive, index) => (
        <button
          style={{ backgroundColor: isActive ? "green" : "red" }}
          onClick={() => handleButtonStateChange(isActive, index)}
          key={index}
        >
          {isActive ? "Active" : "Inactive"}
        </button>
      ))}
    </>
  );
}
