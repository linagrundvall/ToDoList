import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
    return (
    <ul className="todo-list">
      <TodoListItem />
      <TodoListItem />
    </ul>
    );
};

export default TodoList;