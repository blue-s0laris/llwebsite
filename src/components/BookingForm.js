import React from "react";

const BookingForm = ({ availableTimes, setAvailableTimes }) => {
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    console.log(`Selected date: ${selectedDate}`);
    setAvailableTimes(["17:00", "18:00", "19:00"]);
  };

  return (
    <form style={{ display: "grid", maxWidth: "300px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" onChange={handleDateChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time">
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
