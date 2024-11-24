import React from "react";
import Logo from "../assets/Logo.svg";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div>
        <img
          src={Logo}
          alt="Little Lemon Logo"
          style={{ height: "40px", marginRight: "5em" }}
        />
      </div>
      <Nav />
    </header>
  );
}
