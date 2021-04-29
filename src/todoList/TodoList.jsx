import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  //destructering på propsvariabeln, plockar ut från props
  const {todo, selectedTodo, completedTodo} = props;
  
  const handleTodoClicked = (todo) => {
    if (props.onTodoSelected) {
      //anropas, reaktionen på onClick, skickar med todon därifrån, som går upp till App och sätts till selectedTodo
      props.onTodoSelected(todo);
    }
  };

  const handleTodoChanged = (todo) => {
    if(props.onTodoCompleted) {
      props.onTodoCompleted(todo);
    }
  };



    return (
    <ul className="todo-list">
      {/* arrayfunktionen map returnerar ett objekt per objekt i listan, då får vi över datalistan till element istället, varje objekt är en todo*/}
      {todo.map(todo => (
      <TodoListItem 
        //när man klickar anropas handletodoclicked
        onClick={handleTodoClicked} 
        onChange={handleTodoChanged}
        // unik nyckel för att öka prestandan, react ska veta vilka objekt i listan som ska updateras och itne behöver uppdatera hela listan
        key={todo.id} 
        todo={todo} 
        //skickar in så listan vet vilken är selected, kolar om dne vi loopar på i det här varvet är markerad
        isSelected={todo === selectedTodo} 
        isCompleted={todo === completedTodo}
        />
      ))}
    </ul>
    );
};

export default TodoList;