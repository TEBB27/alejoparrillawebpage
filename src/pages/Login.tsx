import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Importa el archivo de estilos

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Aquí iría la lógica para verificar las credenciales (llamada a la API)
        // Si las credenciales son correctas, redirige a la página de cupones
        navigate('/admin/cupones');
    };

    return (
        <div className="login-background">
            <div className="login-container">
                <h2>Iniciar Sesión</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Usuario</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-button">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
