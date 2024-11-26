import React from "react";
import { Link } from "react-router-dom";
import Photo from "../assets/restaurant.jpg";

export default function Main() {
  return (
    <main>
      {/* Left Content */}
      <div style={{ marginLeft: "52%" }}>
        <h1>Little Lemon</h1>
        <h2>Washington, D.C.</h2>
        <p>
          Little Lemon is a restaurant born in 2003, specializing in Italian
          cuisine. We only use locally-grown fresh ingredients and curated
          recipes to achieve the best taste for our dishes.
        </p>
        <Link to="/booking">
          <button>Reserve a table</button>
        </Link>
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
