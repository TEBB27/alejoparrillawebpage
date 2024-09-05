import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css';  // Importamos el archivo de estilos

const AdminNavbar: React.FC = () => {
    return (
        <nav className="admin-navbar">
            <div className="admin-navbar__container">
                <ul className="admin-navbar__list">
                    <li className="admin-navbar__item">
                        <Link to="/admin/cupones" className="admin-navbar__link">Cupones</Link>
                    </li>
                    <li className="admin-navbar__item">
                        <Link to="/admin/registrar" className="admin-navbar__link">Registrar Locación</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default AdminNavbar;
