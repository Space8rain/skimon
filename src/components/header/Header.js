import React from "react";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <a href="/" className="header_title">Мониторинг горнолыжных курортов</a>
      <button className="header_btn">Москва и московская область</button>
    </header>
  )
}

export default Header;