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
  console.log(cuurentID);
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
  // console.log(todo);
  return (
    <div>
      {user ? <Logout /> : <Login />}
      <form
        className={user ? "" : "none"}
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
                console.log(updatedTodos);
                localStorage.setItem("Todos", JSON.stringify(updatedTodos));
              }}
            />
          );
        })}
      </ul>
      <div>completed:{todo.filter((todoItem) => todoItem.isDone).length}</div>
      <div>
        not completed:{todo.filter((todoItem) => !todoItem.isDone).length}
      </div>
    </div>
  );
}
//user
export default App;
