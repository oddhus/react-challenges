const todoList = ["Learn React", "Clean apartment", "Feed cat"];

/**
 * Store the todoList in state and make it possible to add new items
 */
export default function Challenge19() {
  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todoList.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
      <input />
      <button>Add todo</button>
    </>
  );
}
