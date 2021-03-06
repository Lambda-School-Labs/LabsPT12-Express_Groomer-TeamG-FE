import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer, FooterName } from './footerStyles';
import logo from '../../assets/Pet Express.png';

function Footer() {
  return (
    <FooterContainer>
      <Link to="/">
        <img src={logo} alt="cat and dog together" />
      </Link>
      <FooterName>Pet Express © 2021</FooterName>
      <div className="footer-icons">
        <i className="fab fa-facebook footer-icon"></i>
        <i className="fab fa-twitter footer-icon"></i>
        <i className="fab fa-instagram footer-icon"></i>
      </div>
    </FooterContainer>
  );
}

export default Footer;
