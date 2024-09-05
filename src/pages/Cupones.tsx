import React, { useEffect, useState } from 'react';
import './Cupones.css';  // Importamos el archivo de estilos

interface Cupon {
    correo: string;
    cupon: string;
    estado: string;
}

const Cupones: React.FC = () => {
    const [cupones, /*setCupones*/] = useState<Cupon[]>([
        {
            correo: 'asdfe41@example.com',
            cupon: 'CUPON2024',
            estado: 'activo',
        },
        {
            correo: 'Nicolas@example.com',
            cupon: 'DESCUENTO50',
            estado: 'inactivo',
        },
        {
            correo: 'nicolletaYin@example.com',
            cupon: 'PROMO123',
            estado: 'activo',
        },
        {
            correo: 'Pac35@example.com',
            cupon: 'SALE20',
            estado: 'inactivo',
        }
    ]);

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredCupones, setFilteredCupones] = useState<Cupon[]>(cupones);

    useEffect(() => {
        // Filtrar los cupones según el término de búsqueda
        const filtered = cupones.filter(cupon =>
            cupon.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cupon.cupon.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cupon.estado.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCupones(filtered);
    }, [searchTerm, cupones]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="cupones-container">
            <h2>Lista de Cupones</h2>

            {/* Barra de búsqueda */}
            <input
                type="text"
                placeholder="Buscar cupones..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-bar"
            />

            <table className="cupones-table">
                <thead>
                    <tr>
                        <th>Correo</th>
                        <th>Cupon</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCupones.length > 0 ? (
                        filteredCupones.map((cupon) => (
                            <tr key={cupon.cupon}>
                                <td>{cupon.correo}</td>
                                <td>{cupon.cupon}</td>
                                <td className={cupon.estado === 'activo' ? 'estado-verde' : 'estado-rojo'}>
                                    {cupon.estado}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3} style={{ textAlign: 'center' }}>No se encontraron cupones</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Cupones;
