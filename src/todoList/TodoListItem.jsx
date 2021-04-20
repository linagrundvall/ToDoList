import React from "react";

/* { <!--Todo-objekt, markerat--> }
<li className="todo-list-item todo-list-item--selected">
<span className="todo-list-item__checkbox"></span>
<div className="todo-list-item__info">
  <h3>Todo (selected)</h3>
  <p>Ham, sandwich, cheese</p>
</div>
</li>
{/* <!--Todo-objekt, slutfört--> }
<li className="todo-list-item todo-list-item--completed">
<span className="todo-list-item__checkbox todo-list-item__checkbox--completed">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
</span>
<div className="todo-list-item__info">
  <h3>Todo (completed)</h3>
  <p>Ham, sandwich, cheese</p>
</div>
</li> */


/* Todo-objekt*/
const TodoListItem = (props) => {
    return (
        <li className="todo-list-item">
          <span className="todo-list-item__checkbox"></span>
          <div className="todo-list-item__info">
            <h3>Todo</h3>
            <p>Ham, sandwich, cheese</p>
          </div>
        </li>
    );
}

export default TodoListItem;