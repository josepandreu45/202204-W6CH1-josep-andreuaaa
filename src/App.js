import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "./components/Form/Form";
import ToDoesList from "./components/ToDoList/ToDoList";
import toDoesData from "./data/toDo";
import { loadToDoesActionCreator } from "./redux/feature/toDoSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToDoesActionCreator(toDoesData));
  }, [dispatch]);

  return (
    <>
      <ToDoesList />
      <Form />
    </>
  );
}

export default App;
