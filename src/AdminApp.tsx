import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';  // Importar Login
import Cupones from './pages/Cupones';  // Importar Cupones
import Registrar from './pages/Registrar';  // Importar Registrar
import AdminNavbar from './components/AdminNavbar';  // Importar AdminNavbar
import AdminFooter from './components/AdminFooter';

const AdminApp: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cupones" element={<><AdminNavbar /> <Cupones /><AdminFooter /></>} />
                <Route path="/registrar" element={<><AdminNavbar /> <Registrar /><AdminFooter /></>} />
            </Routes>
        </>
    );
};

export default AdminApp;
