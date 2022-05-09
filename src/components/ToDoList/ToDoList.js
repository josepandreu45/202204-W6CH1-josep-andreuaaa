import ToDoItem from "../ToDoItem/ToDoItem";
import toDoes from "../../data/toDo";

const ToDoesList = () => {
  return toDoes.map((toDo) => {
    return (
      <ToDoItem key={toDo.id} id={toDo.id} name={toDo.name} done={toDo.done} />
    );
  });
};

export default ToDoesList;
