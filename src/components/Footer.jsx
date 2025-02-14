import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-info">
        <p>Teléfono: +1 (555) 123-4567</p>
      </div>
      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div className="address-info">
        <p>Dirección: Calle Falsa 123, Ciudad Inventada, País</p>
      </div>
    </div>
  );
};

export default Footer;