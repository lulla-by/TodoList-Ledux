import React from "react";
import { Route } from "react-router-dom";
import TodoList from "./pages/TodoList";
import Detail from "./Detail";


function App() {
  return <>
    <Route path ="/" exact>
      <TodoList />;
    </Route>
    
    <Route path ="/detail/:id">
      <Detail />;
    </Route>

  </>
}

export default App;
