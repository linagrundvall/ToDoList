import logo from './logo.svg';
import './App.css';
import TodoList from './todoList/TodoList';
import TodoDetails from './todoDetails/TodoDetails';
import CreateTodoForm from './todoDetails/CreateTodoForm';
import EditTodoForm from './todoDetails/EditTodoForm';
import { useState } from 'react';

const viewModes = {
  view: "View",
  edit: "Edit",
  create: "Create",
};

function App() {
  const [todo, setTodo] = useState([]);

const [selectedTodo, setSelectedTodo] = useState();
const [viewMode, setViewMode] = useState(viewModes.create);

//Markerar en todo och visar todons detaljvyn
const selectTodo = (todo) => {
  setSelectedTodo(todo);
  setViewMode(viewModes.view);
}

const handleTodoSave = (newTodo) => {
  //Skapa en kopia av listan och lägger till det senast skapade objektet
  const newArray = [...todo, newTodo];
  //uppdaterar todo med en ny referens
  setTodo(newArray);
  selectTodo(newTodo);
};

const renderMainSection = () => {
  switch(viewMode) {
    case viewModes.view:
      return <TodoDetails  
        todo={selectedTodo} 
        onEdit={() => setViewMode(viewModes.edit)} />;
    case viewModes.edit:
      return <EditTodoForm 
        todo={selectedTodo} 
        onCancel={() => setViewMode(viewModes.view)} 
        onSave={() => setViewMode(viewModes.view)} />;
    case viewModes.create:
      return <CreateTodoForm 
        onCancel={() => setViewMode(viewModes.view)} 
        onSave={handleTodoSave} />;
    default:
      return null;
  }
};


  return (
    <main>
      <aside>
        <h1 className="list-title">
          My Todos 
          <button 
          id="button-add-todo" 
          className="primary" 
          onClick={() => setViewMode("Create")}>Add</button>
        </h1>
        <TodoList 
          todo={todo} 
          selectedTodo={selectedTodo} 
          onTodoSelected={selectTodo} />
      </aside>
      <section>
        {renderMainSection()}
      </section>
    </main>
  );
}

export default App;
