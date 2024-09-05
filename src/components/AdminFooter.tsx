import './AdminFooter.css';
import logo from '../assets/LOGOO-300x114.png';
import { FaInstagram, FaFacebook} from "react-icons/fa";
import rappi from '../assets/rappi.svg';

const AdminFooter = () => {
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
        </div>
    );
}

export default AdminFooter;
