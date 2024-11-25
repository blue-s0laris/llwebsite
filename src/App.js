import "./App.css";
import "../src/styling/specials.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import Homepage from "./components/Homepage";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/booking">Booking</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
