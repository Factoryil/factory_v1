import React from "react";
import "../styles/ContactModule.css";

import iconoCorreo from '../assets/img/icons8-email-48.png';
import iconoTelefono from '../assets/img/icons8-featurephone-48.png';
import iconoOficina from '../assets/img/icons8-business-building-48.png';
import iconoFacebook from '../assets/img/icons8-facebook-48.png';
import iconoTwitterx from '../assets/img/icons8-twitterx-50.png';
import iconoInstagram from '../assets/img/icons8-instagram-48.png';


const ContactInfo = () => {
  const emails = ["info@acme.com", "support@acme.com"];
  const phones = ["+57 300 123 4567", "+57 311 765 4321"];
  const offices = [
    { location: "Barranquilla, Colombia", address: "Calle 123, Barrio Centro" },
    { location: "Medellín, Colombia", address: "Calle 456, Barrio Norte" },
  ];

  return (
    <div className="contact-info">
      <div className="contenedor-datos">
      <h3>Datos de Contacto</h3>
      <ul>
        <li>
          <div className="contenedor-titulo-datos">
            <img src={iconoCorreo} alt="" />
          <strong>Correos Electrónicos:</strong>
          </div>
          <ul>
            {emails.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
        </li>
        <li>

        <div className="contenedor-titulo-datos">
            <img src={iconoTelefono} alt="" />
          <strong>Teléfonos:</strong>
          </div>
          <ul>
            {phones.map((phone, index) => (
              <li key={index}>{phone}</li>
            ))}
          </ul>
        </li>
        <li>
        <div className="contenedor-titulo-datos">
            <img src={iconoOficina} alt="" />
          <strong>Oficinas:</strong>
          </div>
          <ul>
            {offices.map((office, index) => (
              <li key={index}>
                {office.location} - {office.address}
              </li>
            ))}
          </ul>
        </li>
      </ul>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.165256857192!2d-74.80014348479969!3d10.978394157005898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42dbdc11f4f7d%3A0x910122c82a6e5b1d!2sCalle%20123%2C%20Barranquilla%2C%20Atl%C3%A1ntico%2C%20Colombia!5e0!3m2!1sen!2sus!4v1691853789013!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div className="social-media">
      <h3>Síguenos en Redes Sociales</h3>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src={iconoFacebook} alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <img src={iconoTwitterx} alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src={iconoInstagram} alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h3>Ponte en Contacto</h3>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre Completo</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

const ContactoPage = () => {
  return (
    <div className="contact-module">
        <ContactInfo />
        <SocialMedia />
      <ContactForm />
    </div>
  );
};

export default ContactoPage;
