import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "toDoes",
  initialState: [],
  reducers: {
    loadToDoes: (toDoes, action) => [...action.payload],
    removeToDo: (toDoes, action) => {
      return toDoes.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

export const {
  removeToDo: removeToDoActionCreator,
  loadToDoes: loadToDoesActionCreator,
} = toDoSlice.actions;

export default toDoSlice.reducer;
