import React from "react";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Amit Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
