import { useDispatch } from "react-redux";
import { removeToDoActionCreator } from "../../redux/feature/toDoSlice";

const ToDoItem = ({ id, name, done }) => {
  const dispatch = useDispatch();
  const removeToDo = () => {
    dispatch(removeToDoActionCreator(id));
  };

  return (
    <>
      <ul>
        <li>Id: {id}</li>
        <li>Name: {name}</li>
        <li>Done: {done ? "Yes" : "X"}</li>
      </ul>
      <button onClick={removeToDo}>DELETE</button>
    </>
  );
};

export default ToDoItem;
