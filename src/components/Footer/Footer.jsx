import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <ul>
            <li>FAQ</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li>Policy</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      &nbsp;
     
      
      <p style={{padding:'0px',margin:'0px'}}>Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by Navaneeth Krishna </p>

    </div>
  );
}

export default Footer;
