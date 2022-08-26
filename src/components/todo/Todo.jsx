import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { deleteTodo, changeTodo } from "../../redux/modules/todo";
import { useDispatch } from "react-redux/es/hooks/useDispatch";


function Todo({todo}) {
  const history = useHistory();
  console.log(todo)
  const dispatch = useDispatch()

  return (
    <div className="todo-container">
      <div>
        <button onClick={()=>{ history.push("/detail/" + (todo.id - 1))}}>상세보기</button>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>

      <div className="button-set">

        <button
          className="todo-delete-button button"
          onClick={() => {
            console.log("삭제버튼클릭")
            dispatch(deleteTodo(todo.id))
          }}
        >삭제하기</button>

        <button 
          className="todo-complete-button button"
          onClick={() =>{dispatch(changeTodo(todo.id))}}
        >{todo.isDone ? "취소" : "완료"}</button>

      </div>

    </div>
  );
}

export default Todo;
