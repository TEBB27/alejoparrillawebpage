import React, { useState } from 'react';
import './Registrar.css';  // Importamos el archivo de estilos

const Registrar: React.FC = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [ubicacionRestaurante, setUbicacionRestaurante] = useState('');
    const [rol, setRol] = useState('ADMIN'); // Por defecto el rol será 'ADMIN'

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const admin = { usuario, contrasena, ubicacionRestaurante, rol };

        // Llamar a la API para crear una nueva locación
        fetch('/api/admin/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(admin),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Nueva locación registrada:', data);
                setUsuario('');
                setContrasena('');
                setUbicacionRestaurante('');
            })
            .catch((error) => console.error('Error registrando locación:', error));
    };

    return (
        <div className="register-container">
            <h2>Registrar Nueva Locación</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Usuario</label>
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        placeholder="Ingrese el usuario"
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        placeholder="Ingrese la contraseña"
                    />
                </div>
                <div className="form-group">
                    <label>Ubicación del Restaurante</label>
                    <input
                        type="text"
                        value={ubicacionRestaurante}
                        onChange={(e) => setUbicacionRestaurante(e.target.value)}
                        placeholder="Ingrese la ubicación del restaurante"
                    />
                </div>
                <div className="form-group">
                    <label>Rol</label>
                    <select value={rol} onChange={(e) => setRol(e.target.value)}>
                        <option value="ADMIN">ADMIN</option>
                        <option value="MANAGER">MANAGER</option>
                        {/* Puedes agregar otros roles si es necesario */}
                    </select>
                </div>
                <button type="submit" className="register-button">Registrar</button>
            </form>
        </div>
    );
};

export default Registrar;
