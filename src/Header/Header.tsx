import React from "react";
import "./Header.css";
import campfire from "../images/campfire.png";

export function Header() {
  return (
    <header className="header">
      <a
        href="https://docs.google.com/document/d/1NwrwG1uq9bGVG2U2BvIbsbJhat0QAoMF/edit#heading=h.3dy6vkm"
        target="_blank"
        rel="noreferrer"
        className="header__image-link"
      >
        <img src={campfire} alt="костер" className="header__image" />
      </a>
    </header>
  );
}
