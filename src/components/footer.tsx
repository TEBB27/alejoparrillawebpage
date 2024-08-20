import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGOO-300x114.png';
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import rappi from '../assets/rappi.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="column logo-column">
                <img src={logo} alt="Alejoparrilla's logo" className="footer-logo" />
                <div className="social-icons">
                    <a href="https://www.instagram.com/alejoparrillabog/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer">
                        <FaInstagram color="white" className="social-icon-tw" />
                    </a>
                    <a href="https://www.facebook.com/alejoparrillabog/?locale=es_LA" target="_blank" rel="noopener noreferrer">
                        <FaFacebook color="white" className="social-icon-fa" />
                    </a>
                    <a href="https://www.rappi.com.co/restaurantes/900248801-alejo-parrilla" target="_blank" rel="noopener noreferrer">
                        <img src={rappi} alt="Rappi logo" className="rappi-logo" />
                    </a>
                </div>
            </div>
            <div className="column">
                <div className="contact-info">
                    <a href="https://wa.me/573214607611" className="contact-info" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp color="white" />
                        <span>¿Tienes algo que contarnos?</span>
                    </a>
                </div>
                <p>
                    <Link to="/contacto" onClick={() => window.scrollTo(0, 0)} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
                        Tu opinión nos importa, ¡contáctanos!
                    </Link>
                </p>
                <p>
                    <Link to="/contacto" onClick={() => window.scrollTo(0, 0)} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
                        ¡Únete a nosotros!
                    </Link>
                </p>
            </div>
            <div className="column">
                <iframe width="300" height="220" loading="lazy"
                    src="https://www.google.com/maps/embed/v1/search?q=alejoparrilladiverplaza,alejoparrillafontibon,alejoparrillanuestrobogota,alejoparrillaburó25&key=AIzaSyC9m19l4w5J6rpRdsXgFDvuCMDERbqQ5WQ">
                </iframe>
            </div>
        </div>
    );
}

export default Footer;
