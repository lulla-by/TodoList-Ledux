// bucket.js

// Actions
const CREATE = 'todo/CREATE';
const DELETE = 'todo/DELETE';
const CHANGE = 'todo/CHANGE';

const initialState = {
  list : [
    
  ]
}

// Action Creators
export function createTodo(todo){
  return {type: CREATE, todo:todo };
}

export function deleteTodo(todo_id){
  return {type: DELETE, todo_id };
}

export function changeTodo(todo_id){
  return {type: CHANGE, todo_id };
}



// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "todo/CREATE": {
      //새롭게 배열에 들어갈 변수 생성(샤로운값을 추가해놨어야 함)
      const new_todo_list = [...state.list, action.todo];
      console.log(new_todo_list)
      return { list: new_todo_list };

    }

    case "todo/DELETE": {
      console.log(state, action)
      const new_todo_list =  state.list.filter((l, idx) => {
        // console.log(state.list[0].id)
        // console.log(action.id)
        return parseInt(action.todo_id) !== l.id;
    });
    // console.log(new_todo_list)
      return { list: new_todo_list };

    }

    case "todo/CHANGE":{
      const new_todo_list = state.list.map((todo)=>{
        if (todo.id == action.todo_id) {
          return {...todo, isDone:!todo.isDone}
        } else {
          return todo
        }
      })
      return { list: new_todo_list };
    }
    default: return state;
  }
}