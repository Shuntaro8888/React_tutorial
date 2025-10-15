import { createContext, useContext, useReducer, useState } from "react";

const TodosContext = createContext(); //contextを作成
const TodosDispatchContext = createContext();

export const useTodos = () => {
  return useContext(TodosContext);
};

export const useTodosDispatch = () => {
  return useContext(TodosDispatchContext);
};

const reducer = (todos, action) => {
  switch (action.type) {
    case "create": {
      return [...todos, action.todo];
    }
    case "delete": {
      return todos.filter((todo) => {
        //trueは格納
        return todo.id !== action.todo.id; //idが一致していない要素はtrue
      });
    }
    case "update": {
      return todos.map((_todo) => {
        //idが一致したものは新しいtodoステートで更新
        return _todo.id === action.todo.id ? { ..._todo, ...action.todo } : { ..._todo };
      });
    }
    default:
      throw new Error("おかしい");
  }
};

// 初期値（editingはfalse）
const todosList = [
  {
    id: 1,
    content: "店予約する",
    editing: false,
  },
  {
    id: 2,
    content: "卵買う",
    editing: false,
  },
  {
    id: 3,
    content: "郵便出す",
    editing: false,
  },
];

export const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, todosList); //todoステート管理

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};
