import { render, screen } from "@testing-library/react";
import App from "./App";
import Navigation from "./Components/Navigation/Navigation";
import Cards from "./Components/Cards/Cards";
import { BrowserRouter } from "react-router-dom";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("NavigationComponet", () => {
  it("should display ", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    expect(screen.getByText("MySite")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});

it("should change ", () => {
  render(
    <BrowserRouter>
      <Cards datas={() => {}} />
    </BrowserRouter>
  );
  expect(screen.getByText("ALL")).toBeInTheDocument();
});

describe("CardsComponet", () => {
  it("should change text", () => {
    render(
      <BrowserRouter>
        <Cards datas={() => {}} />
      </BrowserRouter>
    );

    const filter = screen.getByTestId("filterchange");
    fireEvent.change(filter, { target: { value: "text" } });
    expect(screen.getByText("Text")).toBeInTheDocument();
  });

  it("should change image ", () => {
    render(
      <BrowserRouter>
        <Cards datas={() => {}} />
      </BrowserRouter>
    );

    const filter = screen.getByTestId("filterchange");
    fireEvent.change(filter, { target: { value: "image" } });
    expect(screen.getByText("Image")).toBeInTheDocument();
  });
});
