import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";


const Detail = () => {
const history = useHistory();

const params = useParams()
const todo_index = params.id
const todo_list = useSelector((state)=> state.todo.list)


console.log(todo_index)
console.log(todo_list)


  
  return(
    <div style = {{
      backgroundColor : "yellow",
      width: "400px",
      height: "400px"
      }}>
      <h1>상세페이지</h1>
      <h4>id:{todo_list[todo_index].id}</h4>
      <h4>{todo_list[todo_index].title}</h4>
      <h4>{todo_list[todo_index].body}</h4>
      <button onClick={()=>{
        history.goBack()
      }}>뒤로가기</button>
    </div>
  )
}

export default Detail;