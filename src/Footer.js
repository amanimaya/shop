import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";
import "./footer.css"
export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-content">

              
                <div className="contact-info">
                    <h3>Contact Us</h3>
                    <p><FaPhone className="footer-icon" /> +213 554 630 111</p>
                    <p><FaEnvelope className="footer-icon" /> info@AmNisop.com</p>
                </div>

               
                <div className="social-icons">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} AmNishop — All Rights Reserved
            </div>
        </footer>
    );
}