import { useState } from "react";
import { useTodos, useTodosDispatch } from "../context/TodosContext";

const Item = ({ todo }) => {
  const [editingContent, setEditingContent] = useState(todo.content); //editingContentステート管理

  const todos = useTodos();
  const dispatch = useTodosDispatch();

  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing }; //...todo = {id:1, content:hogehoge, editing:false}

    dispatch({
      type: "update",
      todo: newTodo,
    });
  };

  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      editing: !todo.editing,
      content: editingContent,
    };

    dispatch({
      type: "update",
      todo: newTodo,
    });
  };

  const complete = (todo) => {
    dispatch({
      type: "delete",
      todo, // todo: todoの省略
    });
  };

  const changeContent = (e) => setEditingContent(e.target.value); //editingContentリアルタイム更新用関数

  return (
    <div>
      <button onClick={() => complete(todo)}>完了</button>
      <form onSubmit={confirmContent} style={{ display: "inline" }}>
        {todo.editing ? (
          <input type="text" value={editingContent} onChange={changeContent} />
        ) : (
          <span onDoubleClick={toggleEditMode}>{todo.content}</span> //トグル切替
        )}
      </form>
    </div>
  );
};

export default Item;
