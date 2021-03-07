export default function Stat({todo}) {
    console.log(todo);
  return (
    <section>
      <div className="stat1">
        completed:<b>{todo.filter((todoItem) => todoItem.isDone).length}</b>
      </div>
      <br />
      <div className="stat2">
        not completed:
        <b>{todo.filter((todoItem) => !todoItem.isDone).length}</b>
      </div>
    </section>
  );
}
