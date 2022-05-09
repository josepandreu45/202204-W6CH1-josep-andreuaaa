const ToDoItem = ({ id, name, done }) => {
  return (
    <ul>
      <li>Id: {id}</li>
      <li>Name: {name}</li>
      <li>Done: {done ? "Yes" : "X"}</li>
    </ul>
  );
};

export default ToDoItem;
