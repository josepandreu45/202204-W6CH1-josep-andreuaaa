import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ToDoList from "./components/ToDoList/ToDoList";
import toDoesData from "./data/toDo";
import { loadToDoesActionCreator } from "./redux/feature/toDoSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToDoesActionCreator(toDoesData));
  }, [dispatch]);

  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
