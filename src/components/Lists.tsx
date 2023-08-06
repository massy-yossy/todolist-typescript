import { memo, FC } from "react";
import { TodoType } from "../types/TodoTypes";

type Props = {
  todos: TodoType[];
  setTodos: (t: TodoType[]) => void;
};

const Lists: FC<Props> = memo((props) => {
  const { todos, setTodos } = props;

  const onChangeList = (id: string, value: string) => {
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        todo.inputValue = value;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const onChangeChecked = (id: string, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if(id === todo.id) {
        todo.checked = !checked;
      }
      return todo
    })
    setTodos(newTodos)
  }
  const todoListDelete = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <ul className="todoList">
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              className="inpuText"
              type="text"
              value={todo.inputValue}
              onChange={(e) => onChangeList(todo.id, e.target.value)}
              disabled={todo.checked}
            />
            <input
              type="checkbox"
              value={todo.inputValue}
              onChange={() => onChangeChecked(todo.id, todo.checked)}
            />
            <button onClick={() => todoListDelete(todo.id)}>削除</button>
          </li>
        );
      })}
    </ul>
  );
});

export default Lists;
