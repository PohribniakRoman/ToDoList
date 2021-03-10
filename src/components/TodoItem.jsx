export default function TodoItem({ data, changeStatus, deleteItem }) {
  return (
      <li className="todo">
        <div>
          {data.title}
        </div>
        <div>{`Creator:${data.name}`}</div>
        <div>{`Date:${data.date}`}</div>
        <button onClick={changeStatus}>Complete task</button>
        <button onClick={deleteItem}>x</button>
      </li>
  );
}
