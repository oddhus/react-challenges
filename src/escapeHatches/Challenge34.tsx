import { useEffect, useState } from "react";

/**
 * Effects are an escape hatch from the React paradigm.
 * They let you “step outside” of React and synchronize your components with some
 * external system.
 * Why is the usage below wrong?
 */
export default function Challenge34() {
  const [visibleTodos, setVisibleTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter | undefined>();

  useEffect(() => {
    setVisibleTodos(getFilteredTodos(todos, filter));
  }, [filter, todos]);

  return (
    <>
      <div className="pb-4">
        <select onChange={(e) => setFilter(e.target.value as TodoFilter)}>
          <option value={"All"}>All</option>
          <option value={"Done"}>Done</option>
          <option value={"NotDone"}>Not done</option>
        </select>
      </div>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.title}>
            {todo.title} {todo.isDone ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </>
  );
}

const getFilteredTodos = (todos: Todo[], filter?: TodoFilter) =>
  todos.filter((todo) =>
    filter === "Done" ? todo.isDone : filter === "NotDone" ? !todo.isDone : true
  );

interface Todo {
  isDone: boolean;
  title: string;
}

const todos = [
  {
    isDone: false,
    title: "Buy groceries",
  },
  {
    isDone: true,
    title: "Do laundry",
  },
  {
    isDone: false,
    title: "Call mom",
  },
];

type TodoFilter = "All" | "Done" | "NotDone";
