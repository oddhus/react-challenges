import { Dispatch, SetStateAction, useState } from "react";

const restaurants = [
  "Stefano Restaurant",
  "Restaurant 1877",
  "Dirty Vegan Bergen",
];

/**
 * Reset feedback when switching restaurant
 */
export default function Challenge23() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

  return (
    <>
      <RestaurantList setRestaurant={setSelectedRestaurant} />
      <Feeback restaurant={selectedRestaurant} />
    </>
  );
}

interface RestaurantListProps {
  setRestaurant: Dispatch<SetStateAction<string>>;
}

const RestaurantList = ({ setRestaurant }: RestaurantListProps) => {
  return (
    <section>
      <ul style={{ display: "flex", paddingInlineStart: "0px", gap: "8px" }}>
        {restaurants.map((restaurant) => (
          <li style={{ listStyleType: "none" }}>
            <button onClick={() => setRestaurant(restaurant)}>
              {restaurant}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Feeback = ({ restaurant }: { restaurant: string }) => {
  const [feedbackText, setFeedbackText] = useState("");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <textarea
        value={feedbackText}
        onChange={(e) => setFeedbackText(e.target.value)}
      />
      <button
        style={{ width: "fit-content" }}
        onClick={() => alert("Submitting")}
      >
        Add feedback for {restaurant}
      </button>
    </div>
  );
};
