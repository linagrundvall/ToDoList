import React from "react";
import todoService from "../api/todoApiService";

/* <!--Visningsläge för todo--> */

const TodoDetails = (props) => {
  const {todo, onEdit, onDelete} =props;

  const myDate = new Date(todo.created);
  const createdDate = myDate.toLocaleString();


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
          <p className="todo-details__date">Created: {createdDate}</p>
          <p className="todo-details__date">Updated: </p>
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