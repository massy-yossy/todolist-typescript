import { useState } from "react";

import "./App.css";

import { TodoType } from "./types/TodoTypes";
import Form from "./components/Form";
import Lists from "./components/Lists";

function App() {
  //valueの値を入れる用
  const [inputValue, setInputValue] = useState("");

  //todo情報を入れる用
  const [todos, setTodos] = useState<TodoType[]>([]);


  return (
    <div className="App">
      <div>
        <h2>Todoリスト with typescript</h2>
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          todos={todos}
          setTodos={setTodos}
        />
        <Lists todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
}

export default App;
