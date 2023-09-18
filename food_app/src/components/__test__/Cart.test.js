import { screen, render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import RestaurentMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should load restaurent menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurentMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Desserts (2)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("food-items").length).toBe(2);

  expect(screen.getByText("0")).toBeInTheDocument();    //cartItems in header is 0

  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[0]);                          //Added 1st item
  expect(screen.getByText("1")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);                          //Added 2nd item
  expect(screen.getByText("2")).toBeInTheDocument();

  expect(screen.getAllByTestId("food-items").length).toBe(4);  //we are using same ItemList for cart and restaurentMenu page so items are copied

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("food-items").length).toBe(2);   //we removed item from cart
});
