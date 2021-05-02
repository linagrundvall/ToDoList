import React from "react";
import TodoListItem from "./TodoListItem";

//Här visas listan av todos

const TodoList = (props) => {
  //Destructering för att sätta props
  const { todo, selectedTodo, completedTodo } = props;

  //Detta är reaktionen på onClick, skickar med todon därifrån, som går upp till App och sätts till selectedTodo
  const handleTodoClicked = (todo) => {
    if (props.onTodoSelected) {
      props.onTodoSelected(todo);
    }
  };

  //Detta är reaktionen på onChange, skickar med todon därifrån, som går upp till App och sätts till completedTodo
  const handleCheckboxChanged = (todo) => {
    if (props.onTodoCompleted) {
      props.onTodoCompleted(todo);
    }
  };

  return (
    <ul className="todo-list">
      {/* Arrayfunktionen map returnerar ett objekt per objekt i listan, då för vi över datalistan till element istället, varje objekt är en todo*/}
      {todo.map(todo => (
        <TodoListItem
          //När man klickar anropas handleTodoClicked
          onClick={handleTodoClicked}
          //När man klickar anropas handleTodoChanged
          onChange={handleCheckboxChanged}
          //Unik nyckel för att react ska veta vilka objekt i listan som ska updateras och inte behöver uppdatera hela listan, ökar prestandan
          key={todo.id}
          todo={todo}
          //Detta skickas in så listan vet vilken todo som är selected/completed, kollar om den vi loopar på i det här varvet är selected/completed
          isSelected={todo === selectedTodo}
          isCompleted={todo === completedTodo}
        />
      ))}
    </ul>
  );
};

//Här exporterar vi TodoList
export default TodoList;