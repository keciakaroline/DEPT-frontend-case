import { render, screen } from "@testing-library/react";

import ClientCard from "../components/ClientCard";

export const imagesSet1 = [
  {
    title: "A Summer island in the Netherlands",
    brand: "BOL.COM",
    alt: "People playing in the water",
    img: "dummy1",
  },
  {
    title: "Not some average banking website",
    brand: "KEMPEN",
    alt: "People speaking about numbers",
    img: "dummy2",
  },
];

export const imagesSet2 = [
  {
    title: "Beautiful design meets innovative technology",
    brand: "PHILIPS",
    alt: "Lamps",
    img: "dummy3",
  },
  {
    title: "A 100 years of Mondriaan & De Stijl",
    brand: "GEMEENTEMUSEUM",
    alt: "Girl looking to a picture at the wall",
    img: "dummy4",
  },
];

describe("ClientCard", () => {
  it("should render carousel img", () => {
    render(
      <ClientCard firstImageSet={imagesSet1} secondImageSet={imagesSet2} />
    );
    expect(
      screen.getAllByAltText("People playing in the water")[0]
    ).toBeTruthy();
    expect(screen.getAllByAltText("People speaking about numbers")[1].src).toBe(
      "http://localhost/dummy2"
    );

    expect(screen.getAllByAltText("Lamps")[0]).toBeTruthy();
    expect(
      screen.getAllByAltText("Girl looking to a picture at the wall")[1].src
    ).toBe("http://localhost/dummy4");
  });

  it("should render carousel title", () => {
    render(
      <ClientCard firstImageSet={imagesSet1} secondImageSet={imagesSet2} />
    );
    expect(
      screen.getAllByText("A Summer island in the Netherlands")[0]
    ).toBeTruthy();
    expect(
      screen.getAllByText("Not some average banking website")[1]
    ).toBeTruthy();
    expect(
      screen.getAllByText("Beautiful design meets innovative technology")[0]
    ).toBeTruthy();
    expect(
      screen.getAllByText("A 100 years of Mondriaan & De Stijl")[1]
    ).toBeTruthy();
  });
});
