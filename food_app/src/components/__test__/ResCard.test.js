import RestaurentCard, {withOfferLabel} from "../RestaurentCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
// import RestaurantCardOffer from "../Body"

it("should render restaurentcard component with props data", () => {
  render(<RestaurentCard resData={MOCK_DATA} />);

  const resName = screen.getByText("Grameen Kulfi");

  expect(resName).toBeInTheDocument();
});

it("should render restaurentcard component with offer label", () => {
    const RestaurantCardOffer = withOfferLabel(RestaurentCard);
    render(<RestaurantCardOffer resData={MOCK_DATA} />);

    const offer = screen.getByText("20% OFF UPTO ₹50");
  
    expect(offer).toBeInTheDocument();
    
  });
