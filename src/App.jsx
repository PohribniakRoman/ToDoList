import React, { useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import TodoItem from "./components/TodoItem";
import "./styles/style.css";

function App() {
  const user = localStorage.getItem("user");
  const StoredData = JSON.parse(localStorage.getItem("Todos")) || [];
  const cuurentID =
    StoredData.length === 0 ? 0 : StoredData[StoredData.length - 1].id + 1;
  const [todo, update] = useState(StoredData);
  const [counter, updateCounter] = useState(cuurentID);
  const initialFormData = {
    title: "",
    date: "",
    isDone: false,
  };
  const [data, updateData] = useState(initialFormData);
  function updateFormField(event) {
    updateData({ ...data, [event.target.name]: event.target.value });
  }
  return (
    <div>
      {user ? <Logout /> : <Login />}
      <form
        className={user ? "form" : "none"}
        onSubmit={(e) => {
          e.preventDefault();
          update([...todo, { ...data, id: counter }]);
          updateCounter(counter + 1);
          updateData(initialFormData);
          localStorage.setItem(
            "Todos",
            JSON.stringify([...todo, { ...data, id: counter }])
          );
        }}
      >
        <input
          required
          type="text"
          name="title"
          value={data.title}
          onChange={updateFormField}
        />
        <input
          required
          type="date"
          name="date"
          value={data.date}
          onChange={updateFormField}
        />
        <button type="submit">Add task</button>
      </form>
      <ul>
        {todo.map((todoItem, index) => {
          return (
            <TodoItem
              key={todoItem.id}
              data={todoItem}
              changeStatus={() => {
                const dataSlice = [...todo];
                dataSlice[index].isDone = !todoItem.isDone;
                update(dataSlice);
              }}
              deleteItem={() => {
                const updatedTodos = todo.filter((tI) => {
                  return tI.id !== todoItem.id;
                });
                update(updatedTodos);
                localStorage.setItem("Todos", JSON.stringify(updatedTodos));
              }}
            />
          );
        })}
      </ul>
      <div className="stat1">
        completed:<b>{todo.filter((todoItem) => todoItem.isDone).length}</b>
      </div>
      <br />
      <div className="stat2">
        not completed:
        <b>{todo.filter((todoItem) => !todoItem.isDone).length}</b>
      </div>
    </div>
  );
}
export default App;
