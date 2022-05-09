import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import ToDoesList from "./ToDoList";

const mockUseDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => {
    return [
      { id: 1, name: "hola", done: false },
      { id: 2, name: "buenas", done: false },
      { id: 3, name: "adios", done: false },
    ];
  },
  useDispatch: () => {
    return mockUseDispatch;
  },
}));

describe("Given a ToDoList Component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render nine li", () => {
      const expectedResult = 9;
      render(
        <Provider store={store}>
          <ToDoesList />
        </Provider>
      );
      const receivedResult = screen.getAllByRole("listitem");

      expect(receivedResult).toHaveLength(expectedResult);
    });
  });
});
