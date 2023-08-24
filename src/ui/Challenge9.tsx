/**
 * Extract a Recipe component (accepting id, name, and ingredients props) to simplify the code
 */
export default function Challenge9() {
  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.name}</h3>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const recipes = [
  {
    id: 1,
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    id: 2,
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    id: 3,
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];
