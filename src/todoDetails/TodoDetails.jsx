import React from "react";
import todoService from "../api/todoApiService";

/* <!--Visningsläge för todo--> */


const TodoDetails = (props) => {
  //destructering på propsvariabeln, plockar ut från props
  const {todo, onEdit, onDelete} =props;

  const myDate = new Date(todo.created);
  const newDate = myDate.toLocaleString();
  
  const yourDate = new Date(todo.updated);
  const updatedDate = yourDate.toLocaleString();
  
 

  const handleDelete = async () => {
    //Stoppar koden tills du tryckt, synkront
    const confirmationResult = window.confirm(`Do you really want to delete ${todo.title}?`);
    if(confirmationResult) {
      //Ta bort
      const deleteTodo = await todoService.deleteTodo(todo.id);
      onDelete(deleteTodo);
    }
  }
    //
   const isInvalidDate = updatedDate === "Invalid Date";
   //om 
    if(!isInvalidDate) {
       return (
        <div className="todo-details">
          {/* skickar in dynamiskt */}
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <p className="todo-details__date">Created: {newDate}</p>
          <p className="todo-details__date">Updated: {updatedDate}</p>
          <button type="button" 
            className="link-button danger" 
            onClick={handleDelete}>Delete</button>
          <button type="button" 
            className="link-button" 
            onClick={onEdit}>Edit</button>
        </div>
    );
     }
     //annars returnera detta (utan UpdatedDate)
    else {
    return (
        <div className="todo-details">
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <p className="todo-details__date">Created: {newDate}</p>
          <button type="button" 
            className="link-button danger" 
            onClick={handleDelete}>Delete</button>
          <button type="button" 
            className="link-button" 
            onClick={onEdit}>Edit</button>
        </div>
    );
    };
 };

export default TodoDetails;