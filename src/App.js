import "./App.css";
import "../src/styling/specials.css";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Specials from "./components/Specials";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Specials />
      <Footer />
    </div>
  );
}

export default App;
