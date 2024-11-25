import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  test("renders available times", () => {
    const availableTimes = ["17:00", "18:00", "19:00", "20:00"];
    const setAvailableTimes = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    );
    const selectElement = screen.getByLabelText(/choose time/i);
    expect(selectElement).toBeInTheDocument();
    const options = screen.getAllByRole("option");
    expect(options.length).toBe(4);
    expect(options[0]).toHaveTextContent("17:00");
    expect(options[1]).toHaveTextContent("18:00");
    expect(options[2]).toHaveTextContent("19:00");
    expect(options[3]).toHaveTextContent("20:00");
  });

  test("updates available times on date change", () => {
    // Initial available times
    const availableTimes = ["17:00", "18:00", "19:00"];
    const setAvailableTimes = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    );

    const dateInput = screen.getByLabelText(/choose date/i);

    fireEvent.change(dateInput, { target: { value: "2024-12-01" } });

    expect(setAvailableTimes).toHaveBeenCalledTimes(1);
    expect(setAvailableTimes).toHaveBeenCalledWith(["17:00", "18:00", "19:00"]);
  });
});
