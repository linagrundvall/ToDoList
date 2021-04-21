import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  const {todo, selectedTodoId} = props;
    return (
    <ul className="todo-list">
      {todo.map(todo => (
      <TodoListItem key={todo.id} todo={todo} isSelected={todo.id === selectedTodoId} />
      ))}
    </ul>
    );
};

export default TodoList;