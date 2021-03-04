import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [todo, update] = useState([]);
  const [counter, updateCounter] = useState(0);
  const initialFormData = {
    title: "",
    date: "",
    isDone: false,
  };
  const [data, updateData] = useState(initialFormData);
  function updateFormField(event) {
    updateData({ ...data, [event.target.name]: event.target.value });
  }
  console.log(todo);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          update([...todo, { ...data, id: counter }]);
          updateCounter(counter + 1);
          updateData(initialFormData);
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
        <button type="submit">click</button>
      </form>
      <ul>
        {todo.map((todoItem, index) => {
          return (
            <TodoItem key={todoItem.id}
              data={todoItem}
              changeStatus={() => {
                const dataSlice = [...todo];
                dataSlice[index].isDone = !todoItem.isDone;
                update(dataSlice);
              }}
              deleteItem={() => {
                update(
                  todo.filter((tI) => {
                    return tI.id !== todoItem.id;
                  })
                );
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
