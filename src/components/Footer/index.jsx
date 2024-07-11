import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a href="https://www.facebook.com/victoralfonso.csxd/">
          <img src="/img/facebook.png" alt="Facebook" />
        </a>
        <a href="https://x.com/victorcavero_16">
          <img src="/img/twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/victorcavero_16/">
          <img src="/img/instagram.png" alt="Instagram" />
        </a>
      </div>
      <img src="/img/Logo.png" alt="org" />
      <strong>Desarrollado por Victor Cavero</strong>
    </footer>
  );
}

export default Footer;
