import React from "react";

/* <!--Formulär för att skapa todo--> */

const CreateTodoForm = (props) => {
    return (
        <form id="todo-form">
          <h2>Create todo</h2>
          <label>Title</label>
          <input name="title" required value="Todo title" />
          <label>Description</label>
          <textarea name="description" rows="3">Todo Description</textarea
          ><br />
          <button type="button" className="link-button">Cancel</button>
          <button type="button" className="primary">Save</button>
        </form>
    );
};

export default CreateTodoForm;