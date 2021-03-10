export default function Stat({todo}) {
    console.log(todo);
  return (
    <section>
      <div className="completed">
        completed:<b>{todo.filter((todoItem) => todoItem.isDone).length}</b>
      </div>
      <br />
      <div className="uncompleted">
        not completed:
        <b>{todo.filter((todoItem) => !todoItem.isDone).length}</b>
      </div>
    </section>
  );
}
