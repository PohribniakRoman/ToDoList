import React, { useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Stat from "./components/Stat";
import TodoItem from "./components/TodoItem";
import "./styles/style.css";

function App() {
  const user = localStorage.getItem("user");
  const StoredData = JSON.parse(localStorage.getItem("Todos")) || [];
  const cuurentID =
    StoredData.length === 0 ? 0 : StoredData[StoredData.length - 1].id + 1;
  const [isLogined, updateLogin] = useState(false);
  const [todo, update] = useState(StoredData);
  const [counter, updateCounter] = useState(cuurentID);
  const initialFormData = {
    title: "",
    date: "",
    isDone: false,
    name: user,
  };
  const [data, updateData] = useState(initialFormData);
  function updateFormField(event) {
    updateData({ ...data, [event.target.name]: event.target.value });
  }
  function changeStatus() {
    updateLogin(!isLogined);
  }
  return (
    <div>
      {user ? (
        <Logout changeStatus={changeStatus} />
      ) : (
        <Login changeStatus={changeStatus} />
      )}
      <form
        className={user ? "form" : "none"}
        onSubmit={(e) => {
          e.preventDefault();
          const time = [ new Date().getSeconds() < 10 ? `0${new Date().getSeconds()}` : new Date().getSeconds(),new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes(),new Date().getHours() < 10 ? `0${new Date().getHours}` : new Date().getHours()].join(':')
          const cuurentData = [
            ...todo,
            { ...data, id: counter, date: time,name:user},
          ]
          update(cuurentData);
          updateCounter(counter + 1);
          updateData(initialFormData);
          localStorage.setItem(
            "Todos",
            JSON.stringify(cuurentData)
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
                localStorage.setItem("Todos", JSON.stringify(dataSlice));
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
      <Stat todo={todo} />
    </div>
  );
}
export default App;
