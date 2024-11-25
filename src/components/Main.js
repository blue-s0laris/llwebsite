import React, { useState } from "react";
import Photo from "../assets/restaurant.jpg";
import Form from "./BookingForm";

export default function Main() {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);

  return (
    <main>
      {/* Left Content */}
      <div style={{ marginLeft: "52%" }}>
        <h1>Little Lemon</h1>
        <h2>Washington, D.C.</h2>
        <p>
          Litte Lemon is a restaurant born in 2003 specialized in italian
          cousine. We only use local-grown fresh ingredients and curated recipes
          to achieve the best taste for our dishes.
        </p>
        <button>Reserve a table</button>
        {/* Add the Form Component Below */}
        <Form
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
        />
      </div>

      {/* Right Content */}
      <div className="right">
        <span>
          <img src={Photo} alt="Restaurant" style={{ marginRight: "26em" }} />
        </span>
      </div>
    </main>
  );
}
