import ToDoItem from "../ToDoItem/ToDoItem";

import { useSelector } from "react-redux";

const ToDoesList = () => {
  const toDoes = useSelector((state) => state.toDoes);

  return toDoes.map((toDo) => {
    return (
      <ToDoItem key={toDo.id} id={toDo.id} name={toDo.name} done={toDo.done} />
    );
  });
};

export default ToDoesList;
