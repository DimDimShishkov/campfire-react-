import React, { useState, useEffect } from "react";
import "./Header.css";
import campfire from "../images/campfire.png";

interface IHeaderProps {
  isModalOpen: boolean;
  openModal: () => void;
}

export const Header: React.FC<IHeaderProps> = ({ openModal, isModalOpen }) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrollPosition > 80 ? "header_overlay" : ""}`}>
      <a
        href="https://docs.google.com/document/d/1NwrwG1uq9bGVG2U2BvIbsbJhat0QAoMF/edit#heading=h.3dy6vkm"
        target="_blank"
        rel="noreferrer"
        className="header__image-link"
      >
        <img src={campfire} alt="костер" className="header__image" />
      </a>
      <button className="header__button" onClick={() => openModal()}>
        {isModalOpen ? "Скрыть лист" : "Показать персонажа"}
      </button>
    </header>
  );
};
