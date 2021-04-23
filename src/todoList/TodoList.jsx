import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  const {todo, selectedTodoId} = props;
  
  const handleTodoClicked = (todo) => {
    if (props.onTodoSelected) {
      props.onTodoSelected(todo);
    }
  };
    return (
    <ul className="todo-list">
      {todo.map(todo => (
      <TodoListItem onClick={handleTodoClicked} key={todo.id} todo={todo} isSelected={todo.id === selectedTodoId} />
      ))}
    </ul>
    );
};

export default TodoList;