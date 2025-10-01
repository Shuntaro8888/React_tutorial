const List = ({ todos, setTodos }) => {
  const complete = (id) => {
    const completedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(completedTodos);
  };
  return (
    <>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <button onClick={() => complete(todo.id)}>完了</button>
              <span>{todo.content}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
