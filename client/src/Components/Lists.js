import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { UPDATE_LIST } from "../Graphql/Mutation";

const Lists = ({ listInfo, title }) => {
  const [todo, setTodo] = useState("");

  const [updateList] = useMutation(UPDATE_LIST);

  const removeItem = (index) => {
    let todos = listInfo.data.getList.todos;
    let newTodos = JSON.parse(JSON.stringify(todos));
    newTodos.splice(index, 1);
    console.log("res", newTodos);
    updateList({ variables: { title, todos: newTodos } });
  };

  const addItem = () => {
    var todos = listInfo.data.getList.todos;
    var newTodos = [...todos, todo];
    console.log("res :", newTodos);
    updateList({ variables: { title, todos: newTodos } });
    setTodo("");
  };

  return (
    <div className="todo-list">
      {!listInfo.loading && listInfo.data.getList ? (
        <>
          <h1> Title : {listInfo.data.getList.title}</h1>
          {listInfo.data.getList.todos.length > 0 ? (
            <div className="tasks">
              <ol>
                {listInfo.data.getList.todos.map((todo, index) => (
                  <div>
                    <li key={index}>{todo}</li>
                    <button onClick={() => removeItem(index)}>
                      Delete Todo
                    </button>
                  </div>
                ))}
              </ol>
            </div>
          ) : (
            <p>Todos empty</p>
          )}
          <input
            className="input"
            type="text"
            placeholder="Todo ..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          <button onClick={() => addItem()}>Add Todo</button>
        </>
      ) : null}
    </div>
  );
};

export default Lists;
