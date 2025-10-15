import List from "./List";
import Form from "./Form";
import { TodosProvider } from "../context/TodosContext";

const Todo = () => {

  return (
    <TodosProvider>
      <List />
      <Form />
    </TodosProvider>
  );
};

export default Todo;
