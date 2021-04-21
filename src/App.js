import logo from './logo.svg';
import './App.css';
import TodoList from './todoList/TodoList';
import TodoDetails from './todoDetails/TodoDetails';
import CreateTodoForm from './todoDetails/CreateTodoForm';
import EditTodoForm from './todoDetails/EditTodoForm';
import { useState } from 'react';



function App() {
  const [todo, setTodo] = useState([
    {
      "id": "55edb8d2-9000-4d64-bcb7-3bd81bcc06a0",
      "title": "Do something",
      "description": "This is the description",
      "completed": false,
      "created": 1618488094380    
    },
    {
      "id": "41b52cbe-2f08-4b89-9b9f-5d36189b4abf",
      "title": "Buy groceries",
      "description": "Eggs, ham, bacon",
      "completed": false,
      "created": 1618488116543
    },
    {
      "id": "48c4ad89-0697-40b3-87c5-f3955490ed49",
      "title": "Learn JavaScript",
      "completed": false,
      "created": 1618488129238
    }
]);

const [selectedTodo, setselectedTodo] = useState(todo[0]);

  return (
    <main>
      <aside>
        <h1 className="list-title">
          My Todos <button id="button-add-todo" className="primary">Add</button>
        </h1>
        <TodoList todo={todo} selectedTodoId={selectedTodo.id} />
      </aside>
      <section>
        
        <CreateTodoForm />
        <TodoDetails todo={selectedTodo} />
        <EditTodoForm todo={selectedTodo} />
      </section>
    </main>
  );
}

export default App;
