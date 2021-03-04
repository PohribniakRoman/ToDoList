export default function TodoItem({ data, changeStatus, deleteItem }) {
  return (
    <li> 
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
