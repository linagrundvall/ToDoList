import React from "react";
import todoService from "../api/todoApiService";

/* <!--Visningsläge för todo--> */


const TodoDetails = (props) => {
  //destructering på propsvariabeln, plockar ut från props
  const {todo, onEdit, onDelete} =props;

  //Skapar ett nytt datum för created och omvandlar den till en string
  const myDate = new Date(todo.created);
  const newDate = myDate.toLocaleString();
  
  //Skapar ett nytt datum för updated och omvandlar den till en string
  const yourDate = new Date(todo.updated);
  const updatedDate = yourDate.toLocaleString();

  /* const ifDateIsValid = () => {
    const isInvalidDate = updatedDate === "Invalid Date";
    if(!isInvalidDate) {
      return (
        updatedDate
        );
    };
  };  */
  
  const handleDelete = async () => {
    //Synkron funktion som stoppar koden tills du tryckt
    const confirmationResult = window.confirm(`Do you really want to delete ${todo.title}?`);
    if(confirmationResult) {
      //Om du trycker på OK tas todon bort
      const deleteTodo = await todoService.deleteTodo(todo.id);
      onDelete(deleteTodo);
    }
  }

   //Sätter en variabel för om datumet är invalid
   const isInvalidDate = updatedDate === "Invalid Date";
   //Om datumet inte är invalid(dvs ok) så returneras detta (med UpdatedDate)
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
     //Annars returneras detta (utan UpdatedDate)
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
    }
    
 };

export default TodoDetails;