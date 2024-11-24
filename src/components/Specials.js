import React from "react";
import lemondessert from "../assets/lemondessert.jpg";
import greeksalad from "../assets/greeksalad.jpg";
import bruschetta from "../assets/bruschetta.svg";

export default function Specials() {
  return (
    <section className="specials">
      {/* Title and Button */}
      <div className="specials-header">
        <h2>Specials</h2>
        <button>Online menu</button>
      </div>

      {/* Specials Grid */}
      <div className="specials-grid">
        <div className="special-card">
          <div className="image">
            <img src={greeksalad} alt="greeksalad" />
          </div>
          <div className="content">
            <h3>Greek Salad</h3>
            <p>
              With tomatoes, olives, avocado, cheese cucumber and onion. Perfect
              as a green option!
            </p>
            <a href="order">Order a delivery</a>
          </div>
        </div>

        <div className="special-card">
          <div className="image">
            <img src={bruschetta} alt="bruschetta" />
          </div>
          <div className="content">
            <h3>Bruschetta</h3>
            <p>
              Fresh made bread and local grown tomatoes with a spoon of italian
              olive oil making the best appetizer!
            </p>
            <a href="order">Order a delivery</a>
          </div>
        </div>

        <div className="special-card">
          <div className="image">
            <img src={lemondessert} alt="lemon dessert" />
          </div>
          <div className="content-3">
            <h3>Lemon Dessert</h3>
            <p>
              Sponge Cake made with limoncello juice, lemons and a smooth cream
              to end your meal. Take 2 Pay 1!
            </p>
            <a href="order">Order a delivery 2x1</a>
          </div>
        </div>
      </div>
    </section>
  );
}
