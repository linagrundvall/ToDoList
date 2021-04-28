import React from "react";
import todoService from "../api/todoApiService";

/* <!--Visningsläge för todo--> */

const TodoDetails = (props) => {
  const {todo, onEdit, onDelete} =props;

  

  const isUpdatedDate = todo.update !== "";

  
  const myDate = new Date(todo.created);
  const newDate = myDate.toLocaleString();
    
  const yourDate = new Date(todo.updated);
  const updatedDate = yourDate.toLocaleString();
    
  if (!isUpdatedDate) {
    updatedDate = "";
  }
    

  

  const handleDelete = async () => {
    //Stoppar koden tills du tryckt, synkront
    const confirmationResult = window.confirm(`Do you really want to delete ${todo.title}?`);
    if(confirmationResult) {
      //Ta bort
      const deleteTodo = await todoService.deleteTodo(todo.id);
      onDelete(deleteTodo);
    }
  }

    return (
        <div className="todo-details">
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
};

export default TodoDetails;