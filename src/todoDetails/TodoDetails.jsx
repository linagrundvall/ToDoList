import React from "react";
import todoService from "../api/todoApiService";

//Visningsläge för todo

const TodoDetails = (props) => {
  //Destructering för att sätta props
  const {todo, onEdit, onDelete} =props;
   
  //Asynkron funktion som hanterar klick på deleteknappen
  const handleDelete = async () => {
    //Synkron funktion som stoppar koden tills du tryckt
    const confirmationResult = window.confirm(`Do you really want to delete ${todo.title}?`);
    if(confirmationResult) {
      //Om du trycker på OK tas todon bort
      const deleteTodo = await todoService.deleteTodo(todo.id);
      //Sätter den till deleted
      onDelete(deleteTodo);
    }
  }
    
  return (
    <div className="todo-details">
      {/* Skickar in dynamiskt */}
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <p className="todo-details__date">Created: {todo.created}</p>
      <p className="todo-details__date">Updated: {todo.updated}</p>
      <button type="button" 
        className="link-button danger" 
        //När man klickar anropas handleDelete
        onClick={handleDelete}>Delete</button>
      <button type="button" 
        className="link-button" 
        //När man klickar anropas onEdit
        onClick={onEdit}>Edit</button>
    </div>
  );
 };

export default TodoDetails;
