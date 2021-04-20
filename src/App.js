import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <aside>
        <h1 class="list-title">
          My Todos <button id="button-add-todo" class="primary">Add</button>
        </h1>
        {/* <!--Todo-listan--> */}
        <ul class="todo-list">
          {/* <!--Todo-objekt--> */}
          <li class="todo-list-item">
            <span class="todo-list-item__checkbox"></span>
            <div class="todo-list-item__info">
              <h3>Todo</h3>
              <p>Ham, sandwich, cheese</p>
            </div>
          </li>
          {/* <!---->
          <!--Todo-objekt, markerat--> */}
          <li class="todo-list-item todo-list-item--selected">
            <span class="todo-list-item__checkbox"></span>
            <div class="todo-list-item__info">
              <h3>Todo (selected)</h3>
              <p>Ham, sandwich, cheese</p>
            </div>
          </li>
          {/* <!---->
          <!--Todo-objekt, slutfört--> */}
          <li class="todo-list-item todo-list-item--completed">
            <span class="todo-list-item__checkbox todo-list-item__checkbox--completed">
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
            <div class="todo-list-item__info">
              <h3>Todo (completed)</h3>
              <p>Ham, sandwich, cheese</p>
            </div>
          </li>
          {/* <!----> */}
        </ul>
        {/* <!----> */}
      </aside>
      <section>
        {/* <!--Visningsläge för todo--> */}
        <div class="todo-details">
          <h2>Todo title</h2>
          <p>Todo description</p>
          <p class="todo-details__date">Created Date</p>
          <p class="todo-details__date">Updated date</p>
          <button type="button" class="link-button danger">Delete</button>
          <button type="button" class="link-button">Edit</button>
        </div>
        {/* <!---->
        <!--Formulär för att skapa todo--> */}
        <form id="todo-form">
          <h2>Edit todo</h2>
          <label>Title</label>
          <input name="title" required value="Todo title" />
          <label>Description</label>
          <textarea name="description" rows="3">Todo Description</textarea
          ><br />
          <button type="button" class="link-button">Cancel</button>
          <button type="button" class="primary">Save</button>
        </form>
        {/* <!----> */}
      </section>
    </main>
  );
}

export default App;
