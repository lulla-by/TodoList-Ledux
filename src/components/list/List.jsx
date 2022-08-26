import React from "react";
import Todo from "../todo/Todo";
import "./style.css";
import { useSelector } from "react-redux";

function List({todos}) {

  
  console.log("todos",todos)

  // const onDeleteHanlder = (todoId) => {
  //   const newTodos = todos.filter((todo) => {
  //     return todo.id !== todoId;
  //   });

  //   setTodos(newTodos);
  // };



  // const onEditHandler = (todoId) => {
  //   const newTodos = todos.map((todo) => {
  //     if (todo.id === todoId) {
  //       return {
  //         ...todo,
  //         isDone: !todo.isDone,
  //       };
  //     } else {
  //       return { ...todo };
  //     }
  //   });

  //   setTodos(newTodos);
  // };

  

  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {todos && todos.list.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {todos && todos.list.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
              >
              </Todo>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
