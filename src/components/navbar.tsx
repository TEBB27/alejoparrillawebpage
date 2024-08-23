import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./NavBar.css";
import logo from "../assets/LOGOO-300x114.png";
import FloatingButton from './FloatingButton';
import { useRestaurant } from '../context/RestaurantContext';
import { Restaurant } from '../types/restaurant';

function Navbar() {
    const { selectedItem, setSelectedItem, restaurantes } = useRestaurant();

    const [isOpen, setIsOpen] = useState(false);
    const [isSelectRestaurantOpen, setIsSelectRestaurantOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsSelectRestaurantOpen(!isSelectRestaurantOpen);
    };

    const handleItemClick = (item: Restaurant) => {
        setSelectedItem(item);
        toggleDropdown();
    };

    return (
        <header className="header">
            <div className="header__logo">
                <img className="logo" src={logo} alt="Alejoparrilla's logo" />
            </div>
            <nav className={`header__nav ${isOpen ? 'open' : ''}`}>
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <Link to="/" className="header__nav-link" onClick={handleToggle}>Inicio</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/nosotros" className="header__nav-link" onClick={handleToggle}>Nosotros</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/menu" className="header__nav-link" onClick={handleToggle}>Menú</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/contacto" className="header__nav-link" onClick={handleToggle}>Contacto</Link>
                    </li>
                </ul>
                <div className={`dropdown ${isSelectRestaurantOpen ? 'with-body' : ''}`}>
                    <div className='dropdown-header' onClick={toggleDropdown}>
                        <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                        {selectedItem ? selectedItem.label : "SELECCIONAR"}
                        <i className={`fa fa-chevron-right icon ${isSelectRestaurantOpen && "open"}`}></i>
                    </div>
                    <div className={`dropdown-body ${isSelectRestaurantOpen && 'open'}`}>
                        {restaurantes.map((item: Restaurant) => (
                            <div
                                className="dropdown-item"
                                onClick={() => handleItemClick(item)}
                                key={item.id}
                            >
                                <span className={`dropdown-item-dot ${item.id === selectedItem?.id && 'selected'}`}>• </span>
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>
                <button className="header__nav-close-button" onClick={handleToggle}>
                    <FaTimes />
                </button>
            </nav>
            <button className={`header__nav-open-button ${isOpen ? 'hide' : ''}`} onClick={handleToggle}>
                <FaBars />
            </button>
            {!isOpen && <FloatingButton />}
        </header>
    );
}

export default Navbar;
