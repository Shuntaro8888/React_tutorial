import List from "./List";
import Form from "./Form";
import { useState } from "react";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todos, setTodos] = useState(todosList);

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <h2>Reminder</h2>
      <List todos={todos} setTodos={setTodos} />
      <Form createTodo={createTodo} />
    </>
  );
};

export default Todo;
