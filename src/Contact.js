import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <Header />

      <section className="contact-section">
        <h2>📞 Contact Us</h2>
        <p className="contact-subtitle">
          We’d love to hear from you! Feel free to reach out anytime.
        </p>

        <div className="contact-container">
          
          
          <div className="contact-info-box">
            <h3>Get in Touch</h3>
            <p><FaPhone className="icon" /> +213 555 000 111</p>
            <p><FaEnvelope className="icon" /> support@amnishop.com</p>
            <p><FaMapMarkerAlt className="icon" /> Algiers, Algeria</p>
          </div>

          
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message ✉️</button>
          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}