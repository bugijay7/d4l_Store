import React from 'react';
import './footer.css';
import { FaInstagram, FaPinterest, FaFacebookF, FaTwitter } from 'react-icons/fa';
import rings from '../assets/rings.jpg';

function Footer() {
  const styles = {
    pfooter: {
      color: 'white',
      fontSize: '1.3rem',
      textAlign: 'center',
      paddingTop: '30px',
      paddingBottom: '20px',
    },
  };

  return (
    <div>
      <footer>

        <div className="footer-container">
          
           <div className="footer-info">
              <div className="footer-info-section">
              <h3>Contact Us</h3>
              <address>
                <p>123 Jewelry St, Suite 456</p>
                <p>Email: contact@bugi.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Town: Kikuyu</p>
                <p>County: Kiambu</p>
              </address>
             </div>

              <div className="footer-info-section">
              <h3>Connect with Us</h3>
              <ul className="social-media-links">
                <li><a href="#"><FaInstagram size={24} /> Instagram</a></li>
                <li><a href="#"><FaPinterest size={24} /> Pinterest </a></li>
                <li><a href="#"><FaFacebookF size={24} /> Facebook </a></li>
                <li><a href="#"><FaTwitter size={24} /> Twitter </a></li>
              </ul>
            </div>

            <div className="footer-info-section">
              <h3>Customer Service</h3>
              <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Shipping & Returns</a></li>
                <li><a href="#">Size Guide</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Chat with Us</a></li>
              </ul>
            </div>
            </div>
          
        </div>
        <p style={styles.pfooter}>© 2024 D4L Site. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
