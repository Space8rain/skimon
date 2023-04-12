import React from "react";
import './Header.css';
import iconLogoPath from '../../images/icon_logo.svg';

function Header() {
  return (
    <header className="header">
      <a href="/" className="header_title">
        <img src={iconLogoPath} alt="icon logo"/>
        Мониторинг горнолыжных курортов
      </a>
      <button className="header_btn">Москва и московская область</button>
    </header>
  )
}

export default Header;