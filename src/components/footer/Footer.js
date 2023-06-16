import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="copyright">
        <p>© 2023 <a href="https://github.com/Space8rain" target="_blank">SpaceBrain</a></p>
        <p>Режимы работы склонов и цены на подъемники не являются публичной офертой.</p>
      </div>
      <ul className="footer_links">
          <a href="https://t.me/cwraccoon" target="blank" className="footer_icon tg"></a>
        {/* <li className="footer_icon vk"></li> */}
      </ul>
    </footer>
  )
}

export default Footer