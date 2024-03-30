import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import Navbar from './components/navbar.tsx';
import LoadingPage from './components/loadingPage.tsx';
import NewMenu from './components/newMenu.tsx';
import Footer from './components/footer.tsx';

import './main.css'

const faviconUrls = [
    '/favicon1.ico',
    '/favicon2.ico',
    '/favicon3.ico',
    '/favicon4.ico',
];

const restaurantes = [
    { id: 1, label: "Diver Plaza" },
    { id: 2, label: "Nuestro Bogotá" },
    { id: 3, label: "Buró 25" },
    { id: 4, label: "Fontibón" },
];

const initialSelectedItem = restaurantes.find(restaurant => restaurant.label === "Selecciona tu sede");


function Index() {

    const [view, setView] = useState('Inicio');
    const iconIndex = Math.floor(Math.random() * faviconUrls.length) + 1;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false); // Cuando se carga completamente el sitio, oculta la pantalla de carga
        };
        window.addEventListener('load', handleLoad);
        return () => {
            window.removeEventListener('load', handleLoad); // Limpia el evento al desmontar el componente
        };
    }, []);
    //Aquí se definen las constantes para restaurante.
    const [selectedItem, setSelectedItem] = useState(initialSelectedItem);

    return (
        <>
            {loading ? (
                <LoadingPage />
            ) : (
                <>
                    <Helmet>
                        <link rel="icon" href={faviconUrls[iconIndex - 1]} />
                    </Helmet>
                    <div>
                        <Navbar
                            setView={setView}
                            selectedItem={selectedItem}
                            setSelectedItem={setSelectedItem}
                            restaurantes={restaurantes}
                        />
                        <NewMenu />
                        <Footer setView={setView} />
                    </div>
                </>
            )}
        </>
    );
}

ReactDOM.render(<Index />, document.getElementById('root'));