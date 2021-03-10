export default function TodoItem({ data, changeStatus, deleteItem }) {
  return (
    <li className="todo"> 
      {data.title}, {data.date}
      <input type="checkbox" value={data.isDone} onChange={changeStatus} />
      <button
        onClick={deleteItem}
      >
        x
      </button>
    </li>
  );
}
