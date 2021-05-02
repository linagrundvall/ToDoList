import React, { useState } from "react";
import todoService from "../api/todoApiService";

//Formulär för att uppdatera en todo

const EditTodoForm = (props) => {
  //Destructering för att sätta props
  const { todo, onCancel, onSave } = props;
  //Statevariabler för att hantera förändringar. Tar emot en todo som den ska utgå ifrån.
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [updated, setUpdated] = useState(todo.updated);

  //Variebeln isValid sätts till att title inte är lika med en tom sträng
  const isValid = title !== "";

  const handleSave = async () => {
    //om isValid och onSave är sanna gör vi en kopia av todon och lägger till title, description och updated
    if (isValid && onSave) {
      const updatedTodoInfo = {
        ...todo,
        // Om jag lägger till något här så kommer det finnas med i den uppdaterade todon
        title: title,
        description: description,
        updated: updated,
      };

      //Skapar ett nytt datum för updated
      const updatedDate = new Date();
      todo.updated = updatedDate;
      //Och sätter den till updated
      setUpdated(updatedDate);

      //Anropar PUT från API:et för att uppdatera todon
      const updatedTodo = await todoService.updateTodo(todo.id, updatedTodoInfo);

      //Omvandlar datumet till string
      updatedTodo.updated = updatedDate.toLocaleString();

      // Skickar den updaterade todon uppåt till App mha onSave
      onSave(updatedTodo);
    }
  };

  return (
    <form id="todo-form">
      <h2>Edit todo</h2>
      <label>Title</label>
      <input name="title" required
        value={title}
        //På onChange sker event som sätter titeln till vad användaren matat in
        onChange={(e) => setTitle(e.target.value)} />
      <label>Description</label>
      <textarea name="description"
        value={description}
        //På onChange sker event som sätter beskrivningen till vad användaren matat in
        onChange={(e) => setDescription(e.target.value)}
        rows="3"></textarea><br />
      <button type="button" className="link-button"
        //När man klickar anropas onCancel
        onClick={onCancel}>Cancel</button>
      <button
        //Knappen fungerar inte om isValid inte stämmer
        disabled={!isValid}
        type="button" className="primary"
        //När man klickar anropas handleSave
        onClick={handleSave}>Save</button>
    </form>
  );
}

//Här exporterar vi EditTodoForm
export default EditTodoForm;