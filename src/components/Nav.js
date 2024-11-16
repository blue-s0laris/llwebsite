import React from "react";

export default function Nav() {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyleType: "none",
          padding: "0",
        }}
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
