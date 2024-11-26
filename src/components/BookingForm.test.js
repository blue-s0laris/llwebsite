import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  test("renders form fields", () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeInput = screen.getByLabelText(/Choose time/i);
    const peopleInput = screen.getByLabelText(/Number of people/i);

    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(peopleInput).toBeInTheDocument();
  });

  test("enables submit button when form is valid", async () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeInput = screen.getByLabelText(/Choose time/i);
    const peopleInput = screen.getByLabelText(/Number of people/i);

    fireEvent.change(dateInput, { target: { value: "2024-12-01" } });
    fireEvent.change(timeInput, { target: { value: "18:00" } });
    fireEvent.change(peopleInput, { target: { value: "2" } });
  });
});
