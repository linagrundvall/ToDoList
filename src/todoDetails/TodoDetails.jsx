import React from "react";
import todoService from "../api/todoApiService";

//Visningsläge för todo


const TodoDetails = (props) => {
  //Destructering på propsvariabeln, plockar ut från props
  const {todo, onEdit, onDelete} =props;

  /* //Skapar ett nytt datum för created och omvandlar den till en string
  const newDate = new Date(todo.created).toLocaleString();
  
  //Skapar ett nytt datum för updated och omvandlar den till en string
  const updatedDate = new Date(todo.updated).toLocaleString(); */

  /* const todos = await todoService.getAll();

  let newDate = "0";
  let updatedDate = "0";
    for(var i = 0; i < todos.length; i++){
      if(todos[i].id === todo.id){
        newDate = todos.created;
        updatedDate = todos.updated;
      }
    }  */
   
  
  const handleDelete = async () => {
    //Synkron funktion som stoppar koden tills du tryckt
    const confirmationResult = window.confirm(`Do you really want to delete ${todo.title}?`);
    if(confirmationResult) {
      //Om du trycker på OK tas todon bort
      const deleteTodo = await todoService.deleteTodo(todo.id);
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
        onClick={handleDelete}>Delete</button>
      <button type="button" 
        className="link-button" 
        onClick={onEdit}>Edit</button>
    </div>
  );
    
     
    
 };

export default TodoDetails;