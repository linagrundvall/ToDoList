import React, { useState } from "react";

/* <!--Formulär för att skapa todo--> */

const CreateTodoForm = (props) => {
  const {onCancel, onSave} = props;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const isValid = title !== "";

  const handleSave = () => {
    if (isValid && onSave) {
      //Skapa ny todo
      const newTodo = {
        id: Date.now().toString(),
        title: title,
        description: description,
        // completed: Boolean,
        created: Date.now()
      };
      // Skickar uppåt till App mha onSave
      onSave(newTodo);
      //Rensa formuläret
      setTitle("");
      setDescription("");
    }
  };

  

    return (
        <form id="todo-form">
          <h2>Create todo</h2>
          <label>Title</label>
          <input 
            name="title" 
            required value={title} 
            onChange={(e) => setTitle(e.target.value)} />
          <label>Description</label>
          <textarea 
            name="description" 
            rows="3" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            >Todo Description</textarea
          ><br />
          <button 
            type="button" 
            className="link-button" 
            onClick={onCancel}>Cancel</button>
          <button 
            type="button" 
            className="primary" 
            onClick={handleSave} 
            disabled={!isValid}>Save</button>
        </form>
    );
};

export default CreateTodoForm;