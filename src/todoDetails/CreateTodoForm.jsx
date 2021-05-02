import React, { useState } from "react";
import todoService from "../api/todoApiService";

//Formulär för att skapa todo

const CreateTodoForm = (props) => {
  //Destructering för att sätta props
  const { onCancel, onSave } = props;
  //Statevariabler för att hantera förändringar. 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [created, setCreated] = useState("");
  const [updated, setUpdated] = useState("");

  //Om todons titel inte är lika med en tom sträng sparas den som isValid
  const isValid = title !== "";

  const handleSave = async () => {
    //Om todons titel stämmer med isValid och onSave så skapar vi en ny todo och skickar input till API:et
    if (isValid && onSave) {
      const newTodo = {
        title: title,
        description: description,
        created: created,
        updated: updated,
      };

      //Skapar ett nytt datum för created
      const createdDate = new Date();
      newTodo.created = createdDate;
      //Och sätter den till created
      setCreated(createdDate);

      //Skapar ett nytt datum för updated
      newTodo.updated = createdDate;
      //Och sätter den till updated
      setUpdated(createdDate);

      //Det vi får tillbaka från API:et
      const createdTodo = await todoService.createTodo(newTodo);

      //Omvandlar datumen till string
      createdTodo.created = createdDate.toLocaleString();
      createdTodo.updated = createdDate.toLocaleString();

      //Rensar formuläret
      setTitle("");
      setDescription("");

      // Skickar den skapade todon uppåt till App mha onSave
      onSave(createdTodo);
    }
  };

  return (
    <form id="todo-form">
      <h2>Create todo</h2>
      <label>Title</label>
      <input
        name="title"
        required 
        value={title}
        //På onChange sker event som sätter titeln till vad användaren matat in
        onChange={(e) => setTitle(e.target.value)} />
      <label>Description</label>
      <textarea
        name="description"
        rows="3"
        value={description}
        //På onChange sker event som sätter beskrivningen till vad användaren matat in
        onChange={(e) => setDescription(e.target.value)}
      >Todo Description</textarea
      ><br />
      <button
        type="button"
        className="link-button"
        //När man klickar anropas onCancel
        onClick={onCancel}>Cancel</button>
      <button
        type="button"
        className="primary"
        //När man klickar anropas handleSave
        onClick={handleSave}
        //Knappen fungerar inte om isValid inte stämmer
        disabled={!isValid}>Save</button>
    </form>
  );
};

//Här exporterar vi CreateTodoForm
export default CreateTodoForm;
