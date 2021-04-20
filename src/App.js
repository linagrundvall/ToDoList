import logo from './logo.svg';
import './App.css';
import TodoList from './todoList/TodoList';
import TodoDetails from './todoDetails/TodoDetails';
import CreateTodoForm from './todoDetails/CreateTodoForm';
import EditTodoForm from './todoDetails/EditTodoForm';



function App() {
  return (
    <main>
      <aside>
        <h1 className="list-title">
          My Todos <button id="button-add-todo" className="primary">Add</button>
        </h1>
        <TodoList />
      </aside>
      <section>
        <TodoDetails />
        <CreateTodoForm />
        <EditTodoForm />
      </section>
    </main>
  );
}

export default App;
