import { render, fireEvent } from "@testing-library/react";

import FormContact from "../components/FormContact";

describe("FormContact", () => {
  it("should not submit button without validation", () => {
    const handleSubmit = jest.fn(() => {});
    const { container } = render(<FormContact handleSubmit={handleSubmit} />);
    fireEvent.click(container.querySelector("#btn-form"));
    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
