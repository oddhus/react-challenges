import { useState } from "react";

const dailyActivities = ["Eat", "Work", "Sleet"];

/**
 * Only allow one button to be active at the time.
 */
export default function Challenge22() {
  return (
    <>
      {dailyActivities.map((activity) => (
        <CurrentActivityButton key={activity} activity={activity} />
      ))}
    </>
  );
}

interface CurrentActivityButtonProps {
  activity: string;
}

const CurrentActivityButton = ({ activity }: CurrentActivityButtonProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      onClick={() => setIsActive((active) => !active)}
      style={{ backgroundColor: isActive ? "green" : "red" }}
    >
      {activity}
    </button>
  );
};
