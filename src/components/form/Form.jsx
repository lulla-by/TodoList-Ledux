import React, { useState } from "react";
import "./style.css";
import {createTodo} from "../../redux/modules/todo"
import {useDispatch} from "react-redux"


let number = 1;
function Form({ setTodos, todos }) {
 
  const dispatch = useDispatch()

  const initialState = {
    id: 1,
    title: "",
    body: "",
    isDone: false,
  };

  console.log(todos);

  const [todo, setTodo] = useState(initialState);
  
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
    //[name]=> 계산된 키값 computed property
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    //원래하는 서브밋 동작을 방지시킴, 폼태그 특성때문에 사용(새로고침)
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    // setTodos([...todos, { ...todo, id: number }]);
    dispatch(createTodo({ ...todo, id: number }))
    setTodo(initialState);
    number++;
  };
  //form이라는 태그는 안에 버튼이 있으면 그 값을 전송하는 형태로 만들어줌

  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          className="add-input input-body"
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          className="add-input"
          onChange={onChangeHandler}
        />
      </div>
      <button className="add-button">추가하기</button>
      {/* type을 저장하지않으면 submit이 기본값으로 지정됨 */}
    </form>
  );
}

export default Form;
