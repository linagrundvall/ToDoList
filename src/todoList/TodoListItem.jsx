import React from "react";

//Här visas en todo

const TodoListItem = (props) => {
  //Destructering för att sätta props
  const { todo, isSelected, isCompleted, onClick, onChange } = props;

  //Let för att värdet på classnamn kan ändras
  let className = "todo-list-item";
  //Om todon är selected får den ett till klassnamn
  if (isSelected) {
    className += " todo-list-item--selected";
  }
  //Om todon är completed får den ett till klassnamn
  if (isCompleted || todo.completed === true) {
    //Här lägger vi in klassen "todo-list-item__checkbox--completed" om vi vill att de ska visas som gröna när de är completed
    className += " todo-list-item--completed";
  }

  //Detta är reaktionen på onClick, skickar med todon därifrån, som går upp till App
  const handleClick = () => {
    if (onClick) {
      onClick(todo);
    }
  }

  //Detta är reaktionen på onChange, skickar med todon därifrån, som går upp till App
  const handleChange = () => {
    if (onChange) {
      //Sätter completed till true
      todo.completed = true;
      onChange(todo);
    }
  }

  return (
    <li className={className}
      //När man klickar anropas handleClick
      onClick={handleClick}>
      <input type="checkbox"
        className="todo-list-item__checkbox"
        //När man klickar anropas handleChange
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

//Här exporterarvi TodoListItem
export default TodoListItem;