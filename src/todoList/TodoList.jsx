import React, { useState } from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  //Destructering på propsvariabeln, plockar ut från props
  const {todo, selectedTodo, completedTodo} = props;
  
  const handleTodoClicked = (todo) => {
    if (props.onTodoSelected) {
      //Anropas, detta är reaktionen på onClick, skickar med todon därifrån, som går upp till App och sätts till selectedTodo
      props.onTodoSelected(todo);
    }
  };

   const handleTodoChanged = (todo) => {
    if(props.onTodoCompleted) {
      //Anropas, detta är reaktionen på onChange, skickar med todon därifrån, som går upp till App och sätts till completedTodo
      props.onTodoCompleted(todo);
    }
  }; 

    return (
    <ul className="todo-list">
      {/* Arrayfunktionen map returnerar ett objekt per objekt i listan, då får vi över datalistan till element istället, varje objekt är en todo*/}
      {todo.map(todo => (
      <TodoListItem 
        //När man klickar anropas handleTodoClicked
        onClick={handleTodoClicked} 
        //När man klickar anropas handleTodoChanged
        onChange={handleTodoChanged}
        //value={completed}
        //onChange={(e) => setCompleted(e.target.value)}
        //Unik nyckel för att react ska veta vilka objekt i listan som ska updateras och inte behöver uppdatera hela listan, ökar prestandan
        key={todo.id} 
        todo={todo} 
        //Skickar in så listan vet vilken är selected/completed, kollar om den vi loopar på i det här varvet är selected/completed
        isSelected={todo === selectedTodo} 
        isCompleted={todo === completedTodo}
        />
      ))}
    </ul>
    );
};

export default TodoList;