import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import Specials from "./Specials";
import { Link } from "react-router-dom"; // Import Link for the button

const BookingPage = () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00"];
  const setAvailableTimes = () => {};

  return (
    <div className="booking-page">
      <Header />
      <h1 className="booking-header">
        <Link to="/">
          <button className="button">&lt;</button>
        </Link>
        Book Your Table
      </h1>
      <div className="form">
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
        />
      </div>

      <Specials />
      <Footer />
    </div>
  );
};

export default BookingPage;
