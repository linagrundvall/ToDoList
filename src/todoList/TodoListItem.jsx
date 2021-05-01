import React from "react";
import todoService from '../api/todoApiService';

 
/*   //<!--Todo-objekt, slutfört--> }
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


const TodoListItem = (props) => {
    //Destructurering på propsvariabeln, plockar ut från props
    const {todo, isSelected, isCompleted, onClick, onChange} = props;
    
    //Let för att värdet kan ändras
    let className = "todo-list-item";
    //Om todon är selected får den ett till klassnamn
    if (isSelected){
      className += " todo-list-item--selected";
    }

    if (isCompleted){
      className += " todo-list-item--completed";
    }
      
    /* const apiTodo = await todoService.getOne(todo.id);
    //Om den är completed får den ett till klassnamn
    if (apiTodo.completed === true) {
      className += " todo-list-item--completed";
    } */

    //Hantera onClick från todolist.
    //Om onClick finns så anropar vi onClick, tar emot todo
    const handleClick = () => {
      if(onClick) {
        onClick(todo);
      }
    }

    //Hantera onChange från todolist.
    //Om onChange finns så anropar vi onChange, tar emot todo
    const handleChange = () => {
      if(onChange) {
        onChange(todo);
      }
      /* if(onChange && todo === isCompleted) {
        className -= " todo-list-item--completed";
      } */
    }

    return (
      //Det går att klicka på ett listitem, då anropar vi onclick
        <li className={className} onClick={handleClick}>
          <input type="checkbox" 
            className="todo-list-item__checkbox" 
            /* Det går att klicka på ett listitem, då anropar vi onChange */
            onChange={handleChange}>
          </input>
          <div className="todo-list-item__info">
            {/* Hämtar title och description dynamiskt */}
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
        </li>
    );
}

export default TodoListItem;