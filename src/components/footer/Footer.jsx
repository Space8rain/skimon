import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="copyright">
        <p>© 2023</p>
        <p>Режимы работы склонов и цены на подъемники не являются публичной офертой.</p>
      </div>
      <ul className="footer_links">
        <li className="footer_link">
          <a href="https://t.me/cwraccoon" rel="noreferrer" target="_blank" className="footer_icon tg"> </a>
          <p>back</p>
        </li>
        <li className="footer_link">
          <a href="https://github.com/Space8rain" rel="noreferrer" target="_blank" className="footer_icon gh"> </a>
          <p>front</p>
        </li>
        {/* <li className="footer_icon vk"></li> */}
      </ul>
    </footer>
  )
}

export default Footer