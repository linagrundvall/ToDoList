import React from "react";

/* <!--Visningsläge för todo--> */

const TodoDetails = (props) => {
    return (
        <div className="todo-details">
          <h2>Todo title</h2>
          <p>Todo description</p>
          <p className="todo-details__date">Created Date</p>
          <p className="todo-details__date">Updated date</p>
          <button type="button" className="link-button danger">Delete</button>
          <button type="button" className="link-button">Edit</button>
        </div>
    );
};

export default TodoDetails;