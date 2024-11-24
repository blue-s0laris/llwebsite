import React from "react";
import Photo from "../assets/restaurant.jpg";

export default function Main() {
  return (
    <main>
      {/* Left Content */}
      <div style={{ marginLeft: "30em" }}>
        <h1>Little Lemon</h1>
        <h2>Washington, D.C.</h2>
        <p>
          Litte Lemon is a restaurant born in 2003 specialized in italian
          cousine. We only use local-grown fresh ingredients and curated recipes
          to achieve the best taste for our dishes.
        </p>
        <button>Reserve a table</button>
      </div>
      {/* Right Content */}
      <div className="right">
        <span>
          <img src={Photo} alt="Restaurant" />
        </span>
      </div>
    </main>
  );
}
