import React from "react";
import BookingForm from "./BookingForm"; // Ensure the path is correct
import Header from "./Header"; // Ensure the path is correct
import Footer from "./Footer"; // Ensure the path is correct

const BookingPage = () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const setAvailableTimes = () => {}; // Replace with actual logic if needed

  return (
    <div>
      <Header />
      <h1>Book Your Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
      <Footer />
    </div>
  );
};

export default BookingPage;
