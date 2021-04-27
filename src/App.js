import logo from './logo.svg';
import './App.css';
import TodoList from './todoList/TodoList';
import TodoDetails from './todoDetails/TodoDetails';
import CreateTodoForm from './todoDetails/CreateTodoForm';
import EditTodoForm from './todoDetails/EditTodoForm';
import { useEffect, useState } from 'react';
import todoService from './api/todoApiService';

//Här skapas de olika vyerna som kan visas
const viewModes = {
  view: "View",
  edit: "Edit",
  create: "Create",
};

function App() {
  //
  const [todo, setTodo] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState();
  const [viewMode, setViewMode] = useState(viewModes.create);

  //När vi ska skapa en ny todo så sätter vi att ingen todo är markerad och att vyn som visas är create
  const showCreateForm = () => {
    setViewMode(viewModes.create);
    setSelectedTodo(null);
  }

  //Markerar en todo och visar todons detaljvyn
  const selectTodo = (todo) => {
    setSelectedTodo(todo);
    //Sätter visningsläge till view
    setViewMode(viewModes.view);
  }

  const handleTodoSave = (newTodo) => {
    //Skapa en kopia av listan och lägger till det senast skapade objektet
    const newArray = [...todo, newTodo];
    //uppdaterar todo med en ny referens
    setTodo(newArray);
    selectTodo(newTodo);
  };

  const handleTodoUpdate = (updatedTodo) => {
    const newArray = todo.slice();
    for(var i = 0; i < newArray.length; i++){
      if(newArray[i].id === updatedTodo.id){
        newArray[i] = updatedTodo;
        break;
      }
    }
    setTodo(newArray);
    //markerar den uppdaterade todon
    selectTodo(updatedTodo);
  }

  const handleTodoDeleted = (deletedTodo) => {
    //uppdaterar listan. filtrerar ut och visar alla todos förutom den todo som idmatchar den som tagits bort
    setTodo(todo.filter(todo => todo.id !== deletedTodo.id));
    //Den ovan och getTodos gör samma sak, getTodos anropar API vilket kan påverka prestandan
    //getTodos();
    //ändrar vyn till create
    showCreateForm();

  }

  //Vi hämtar alla todos via getAll på todoService och sparar i variabeln todos 
  const getTodos = async () => {
    const todos = await todoService.getAll();
    setTodo(todos);
  }

  //Körs vid start, med tom beroendelista körs den bara en gång
  useEffect(() => {
    getTodos();
  }, []);

  //Här renderar vi huvudsidan
  const renderMainSection = () => {
    //Om vi inte har en vald todo eller createvyn så visar vi detta
    if(!selectedTodo || viewMode === viewModes.create){
      return (
        <CreateTodoForm
          onCancel={() => setViewMode(viewModes.view)}
          onSave={handleTodoSave} />
      );
    }
    switch (viewMode) {
      case viewModes.view:
        return (
          <TodoDetails
            todo={selectedTodo} 
            onDelete={handleTodoDeleted}
            onEdit={() => setViewMode(viewModes.edit)} />
        );
      case viewModes.edit:
        return (
          <EditTodoForm
            todo={selectedTodo}
            onCancel={() => setViewMode(viewModes.view)}
            onSave={handleTodoUpdate} />
        );
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
            onClick={showCreateForm}>
            Add</button>
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
