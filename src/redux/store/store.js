import toDoReducer from "../feature/toDoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    toDoes: toDoReducer,
  },
});

export default store;
