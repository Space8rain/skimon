import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="copyright">
        <p>© 2020 - 2023 <a href="/" target="_blank">enot.dev</a></p>
        <p>Режимы работы склонов и цены на подъемники не являются публичной офертой.</p>
      </div>
      <ul className="footer_link">
        <li className="footer_icon tg"></li>
        <li className="footer_icon vk"></li>
      </ul>
    </footer>
  )
}

export default Footer