import React, { useState, useEffect, useCallback } from "react";
import "../styling/bookingform.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    people: "",
  });

  const [errors, setErrors] = useState({
    date: "",
    time: "",
    people: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = useCallback(() => {
    let newErrors = { date: "", time: "", people: "" };
    const { date, time, people } = formData;

    if (submitted) {
      if (!date) newErrors.date = "Date is required.";
      if (!time) newErrors.time = "Time is required.";
      if (!people || people < 1)
        newErrors.people = "Number of people must be at least 1.";
    }

    setErrors(newErrors);
    setIsFormValid(!Object.values(newErrors).some((error) => error));
  }, [formData, submitted]);

  useEffect(() => {
    validateForm();
  }, [formData, validateForm]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setFormData((prevData) => ({ ...prevData, date: selectedDate }));
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setFormData((prevData) => ({ ...prevData, time: selectedTime }));
  };

  const handlePeopleChange = (e) => {
    const selectedPeople = e.target.value;
    setFormData((prevData) => ({ ...prevData, people: selectedPeople }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    validateForm();
    if (!isFormValid) return;
    alert("Booking confirmed!");
    console.log("Form submitted with data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-group">
        <label htmlFor="res-date" className="form-label">
          Choose date
        </label>
        <input
          type="date"
          id="res-date"
          className="form-input"
          value={formData.date}
          onChange={handleDateChange}
          required
        />
        {submitted && errors.date && (
          <p className="error-message">{errors.date}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="res-time" className="form-label">
          Choose time
        </label>
        <select
          id="res-time"
          className="form-input"
          value={formData.time}
          onChange={handleTimeChange}
          required
        >
          <option value="" disabled>
            Select a time
          </option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
        </select>
        {submitted && errors.time && (
          <p className="error-message">{errors.time}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="res-people" className="form-label">
          Number of people
        </label>
        <input
          type="number"
          id="res-people"
          className="form-input"
          value={formData.people}
          onChange={handlePeopleChange}
          min="1"
          required
        />
        {submitted && errors.people && (
          <p className="error-message">{errors.people}</p>
        )}
      </div>

      <button className="submit-button" type="submit" aria-label="Book Now">
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
