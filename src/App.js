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
  //Statevariabler för att hantera förändringar.
  const [todo, setTodo] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState();
  const [completedTodo, setCompletedTodo] = useState();
  const [viewMode, setViewMode] = useState(viewModes.create);

  //Vi skapar en ny todo
  const showCreateForm = () => {
    //Vyn som visas är create
    setViewMode(viewModes.create);
    //Vi sätter vi att ingen todo är markerad
    setSelectedTodo(null);
  }

  //Markerar en todo
  const selectTodo = (todo) => {
    //Sätter todon till selected
    setSelectedTodo(todo);
    //Sätter visningsläge till view
    setViewMode(viewModes.view);
  }

  //Sätter en todo till completed
  const completeTodo = async (completedTodo) => {
    //Sätter todon till completed
    setCompletedTodo(completedTodo);
    //Sätter completed till true
    completedTodo.completed = true;
    //Anropar PUT från API:et för att uppdatera
    await todoService.updateTodo(completedTodo.id, completedTodo);
    //Sätter visningsläge till view
    setViewMode(viewModes.view);
  }


  const handleTodoSave = async (newTodo) => {
    //Skapa en kopia av listan och lägger till det senast skapade objektet
    const newArray = [...todo, newTodo];
    //Uppdaterar todo med en ny referens
    setTodo(newArray);
    //Anropar PUT från API:et för att uppdatera todon
    await todoService.updateTodo(newTodo.id, newTodo);
    //Sätter att den nya todon är markerad
    selectTodo(newTodo);
  };

  const handleTodoUpdate = (updatedTodo) => {
    //Skapa en kopia av listan och uppdaterar innehållet
    const newArray = todo.slice();
    for (var i = 0; i < newArray.length; i++) {
      if (newArray[i].id === updatedTodo.id) {
        newArray[i] = updatedTodo;
        break;
      }
    }
    //Uppdaterar todo med en ny referens
    setTodo(newArray);
    //Markerar den uppdaterade todon
    selectTodo(updatedTodo);
  }

  const handleTodoDeleted = (deletedTodo) => {
    //Uppdaterar listan. Filtrerar ut och visar alla todos förutom den todo som idmatchar den som tagits bort
    setTodo(todo.filter(todo => todo.id !== deletedTodo.id));
    //Den ovan och getTodos gör samma sak, getTodos anropar API vilket kan påverka prestandan
    //getTodos();
    //Anropar en funktion som sätter vyn till create och avmarkerar alla todos
    showCreateForm();
  }

  //Anropar GET från API:et (via getAll på todoService)för att hämtar alla todos och sparar i variabeln todos
  const getTodos = async () => {
    const todos = await todoService.getAll();
    //Går igenom listan av todos och för varje todo omvandlar vi datumet till string
    for (var i = 0; i < todos.length; i++) {
      todos[i].created = new Date(todos[i].created).toLocaleString();
      todos[i].updated = new Date(todos[i].updated).toLocaleString();
    }
    //Uppdaterar todo med en ny referens
    setTodo(todos);
  }

  //Listar alla todos
  const showAllTodos = () => {
    //Anropar funktionen getTodos ovan
    getTodos();
    //Anropar en funktion som sätter vyn till create och avmarkerar alla todos
    showCreateForm();
  }

  //Listar todos som inte är klara
  const showNoneCompletedTodos = async () => {
    //Anropar GET från API:et (via getAll på todoService)för att hämtar alla todos och sparar i variabeln todos
    const todos = await todoService.getAll();
    //Skapar en lista
    let test = [];

    //Går igenom alla todos som vi hämtade från API:et
    for (var i = 0; i < todos.length; i++) {
      //Om todons completed är false så sätts updated till datum omvandlat till string
      if (todos[i].completed === false) {
        todos[i].updated = new Date(todos[i].updated).toLocaleString();
        //Lägger alla som är false i listan test
        test.push(todos[i]);
      }
    }
    //Uppdaterar todo med en ny referens (listan test)
    setTodo(test);
    //Anropar en funktion som sätter vyn till create och avmarkerar alla todos
    showCreateForm();
  }

  //Listar todos som är klara
  const showCompletedTodos = async () => {
    //Anropar GET från API:et (via getAll på todoService)för att hämtar alla todos och sparar i variabeln todos
    const todos = await todoService.getAll();
    //Skapar en lista
    let test = [];

    //Går igenom alla todos som vi hämtade från API:et
    for (var i = 0; i < todos.length; i++) {
      //Om todons completed är true så sätts updated till datum omvandlat till string
      if (todos[i].completed === true) {
        todos[i].updated = new Date(todos[i].updated).toLocaleString();
        //Lägger alla som är true i listan test
        test.push(todos[i]);
      }
    }
    //Uppdaterar todo med en ny referens (listan test)
    setTodo(test);
    //Anropar en funktion som sätter vyn till create och avmarkerar alla todos
    showCreateForm();
  }

  const showOldestTodosFirst = () => {
    //Skapar en ny variabel som tilldelas en kopia av todo
    const sortByDate = todo.slice();
    //Här sorteras den nya listan efter created (som generellt är äldre än updated)
    //Jag tänker att om man vill se vilken som är äldst så vill man sortera på när de är skapade
    sortByDate.sort((itemA, itemB) => {
      //itemA är äldre än itemB, itemA ska läggas efter B
      if (itemA.created > itemB.created) {
        return 1;
      } else {
        //itemA läggs före B
        return -1;
      }
    });
    //Uppdaterar todo med en ny referens (sorteringen)
    setTodo(sortByDate);
  }

  const showNewestTodosFirst = () => {
    //Skapar en ny variabel som tilldelas en kopia av todo
    const sortByDate = todo.slice();
    //Här sorteras den nya listan efter updated (som generellt är nyare än updated)
    //Jag tänker att om man vill se vilken som är nyast så vill man sortera på när de är updaterade
    sortByDate.sort((itemA, itemB) => {
      //itemA är äldre än itemB, itemA ska läggas efter B
      if (itemA.updated < itemB.updated) {
        return 1;
      } else {
        //itemA läggs före B
        return -1;
      }
    });
    //Uppdaterar todo med en ny referens (sorteringen)
    setTodo(sortByDate);
  }

  //Körs vid start, med tom beroendelista körs den bara en gång
  useEffect(() => {
    //Anropar en funktion som hämtar alla todos
    getTodos();
  }, []);

  //Här renderar vi huvudsidan
  const renderMainSection = () => {
    //Om vi inte har en vald todo eller createvyn så visar vi formulär för att skapa en todo (createvyn)
    if (!selectedTodo || viewMode === viewModes.create) {
      return (
        <CreateTodoForm
          //När man klickar på cancel visas vyn view
          onCancel={() => setViewMode(viewModes.view)}
          //På onSave anropas handleSave
          onSave={handleTodoSave} />
      );
    }
    switch (viewMode) {
      case viewModes.view:
        return (
          //
          <TodoDetails
            //Selected todo skickas hit
            todo={selectedTodo}
            //På onDelete anropas handleTodoDeleted
            onDelete={handleTodoDeleted}
            //När man klickar på edit visas vyn edit
            onEdit={() => setViewMode(viewModes.edit)} />
        );
      case viewModes.edit:
        return (
          <EditTodoForm
            ////Selected todo skickas hit
            todo={selectedTodo}
            //När man klickar på cancel visas vyn view
            onCancel={() => setViewMode(viewModes.view)}
            //På onSave anropas handleTodoUpdated
            onSave={handleTodoUpdate} />
        );
      default:
        //Sätter default till null
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
            //När vi klickar anropas showCreateForm
            onClick={showCreateForm}>
            Add</button>
        </h1>
        <div>
          <h4 className="buttons-filter-todos ">
            <button id="button-filter-none"
              className="link-button"
              //När vi klickar anropas showAllTodos
              onClick={showAllTodos}>
              Show all todos</button>
          </h4>

          <h4 className="buttons-filter-todos">
            <button id="button-filter-none-completed"
              className="link-button"
              //När vi klickar anropas showNoneCompletedTodos
              onClick={showNoneCompletedTodos}>
              Show what to do</button>
          </h4>
          <h4 className="buttons-filter-todos">
            <button id="button-filter-completed"
              className="link-button"
              //När vi klickar anropas showCompletedTodos
              onClick={showCompletedTodos}>
              Show completed</button>
          </h4>
        </div>

        <div>
          <h4 className="buttons-sort-todos">
            <button id="button-sort-oldest-first"
              className="other-link-button"
              //När vi klickar anropas showOldestTodosFirst
              onClick={showOldestTodosFirst}>
              Show oldest todos first</button>
          </h4>
          <h4 className="buttons-sort-todos">
            <button id="button-sort-newest-first"
              className="other-link-button"
              //När vi klickar anropas showNewestTodosFirst
              onClick={showNewestTodosFirst}>
              Show newest todos first</button>
          </h4>
        </div>

        {/*Todo skickas ned hit */}
        <TodoList
          //Todo skickas in som props
          todo={todo}
          //Ser till att det kommer via props ner i todolist
          selectedTodo={selectedTodo}
          completedTodo={completedTodo}
          //När man klickar på en todo ska den sättas till selected
          //Händelse som triggas från todolist, när den blir selected uppdaterar vi state med selectedtodo
          onTodoSelected={selectTodo}
          //När man klickar på checkboxen ska den sättas till completed
          //Händelse som triggas från todolist, när den blir completed uppdaterar vi state med completedtodo
          onTodoCompleted={completeTodo}
        />

      </aside>
      <section>
        {/* Här anropas renderMainSection */}
        {renderMainSection()}
      </section>
    </main>
  );
}

//Här exporterar vi App
export default App;
