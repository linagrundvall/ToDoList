import React, { useState } from "react";
import todoService from "../api/todoApiService";

/* <!--Formulär för att uppdatera todo--> */


const EditTodoForm = (props) => {
  const {todo, onCancel, onSave} = props;
  //statevariabler för att hantera förändringar. Tar emot en todo som den ska utgå ifrån
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [updated, setUpdated] = useState(todo.updated);
  //const [completed, setCompleted] = useState(todo.completed);
  const isValid = title !== "" /* && description !== "" */;

  const handleSave = async () => {
    if(isValid && onSave) {
      const updatedTodoInfo = { ...todo, 
        title: title, 
        description: description,
      // Om jag lägger till något här så kommer det finnas med i den uppdaterade todon
        updated: updated,
        //completed: completed,
      };

      const updatedTodo = await todoService.updateTodo(todo.id, updatedTodoInfo);
      onSave(updatedTodo);
    }
  };

    return (
        <form id="todo-form">
          <h2>Edit todo</h2>
          <label>Title</label>
          <input name="title" required 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}/>
          <label>Description</label>
          <textarea name="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
              rows="3"></textarea><br />
          <button type="button" className="link-button" 
            onClick={onCancel}>Cancel</button>
          <button disabled={!isValid} 
            type="button" className="primary" 
            onClick={handleSave}>Save</button>
        </form>
    );
}

export default EditTodoForm;