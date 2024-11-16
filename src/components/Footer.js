import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div>
        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
      </div>
      <div>
        <p>
          Contact us:{" "}
          <a
            href="mailto:restaurant@littlelemon.com"
            style={{ color: "#4caf50" }}
          >
            restaurant@littlelemon.com
          </a>
        </p>
      </div>
      <div>
        <p>Follow us:</p>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#4caf50", margin: "0 10px" }}
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#4caf50", margin: "0 10px" }}
        >
          Twitter
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#4caf50", margin: "0 10px" }}
        >
          Instagram
        </a>
      </div>
      <div>
        <a href="/privacy" style={{ color: "#4caf50", marginRight: "15px" }}>
          Privacy Policy
        </a>
        <a href="/terms" style={{ color: "#4caf50" }}>
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
