import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <h2>Zainab</h2>

        <p>
          Building modern and user-friendly web experiences with React.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="footer-copyright">
          © 2026 Zainab. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;