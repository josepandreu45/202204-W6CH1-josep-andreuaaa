import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemActionCreator } from "../../redux/feature/toDoSlice";

const Form = () => {
  const initialToDo = {
    id: 5,
    name: "",
    done: false,
  };

  const [newToDo, setNewToDo] = useState(initialToDo);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setNewToDo({ ...newToDo, name: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addItemActionCreator(newToDo));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        value={newToDo.value}
        onChange={handleChange}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default Form;
