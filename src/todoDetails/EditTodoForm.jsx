import React from "react";

/* <!--Formulär för att uppdatera todo--> */


const EditTodoForm = (props) => {
    return (
        <form id="todo-form">
          <h2>Edit todo</h2>
          <label>Title</label>
          <input name="title" required value="Todo title" />
          <label>Description</label>
          <textarea name="description" rows="3">Todo Description</textarea
          ><br />
          <button type="button" className="link-button">Cancel</button>
          <button type="button" className="primary">Save</button>
        </form>
    );
}

export default EditTodoForm;