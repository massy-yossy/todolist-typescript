import React, { memo, FC } from "react";
import { v4 as uuidv4 } from "uuid"

import { TodoType } from "../types/TodoTypes";

type Props = {
  inputValue: string;
  setInputValue: (s: string) => void;
  todos: TodoType[];
  setTodos: (t: TodoType[]) => void;
}

const Form: FC<Props> = memo((props) => {

  const { inputValue, setInputValue, todos, setTodos} = props;

  const formOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    //新しいtodoを作成する
    const newTodos: TodoType = {
      inputValue,
      id: uuidv4(),
      checked: false
    };
    setTodos([...todos, newTodos])
    setInputValue('')
  };

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  };


  return (
    <form onSubmit={formOnSubmit}>
      <input
        type="text"
        onChange={inputOnChange}
        className="inputText"
        value={inputValue}
      />
      <input type="submit" value="作成" className="submitButton" />
    </form>
  );
});

export default Form;
