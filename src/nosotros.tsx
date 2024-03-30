import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import Sobrenosotros from './components/sobre-nosotros.tsx';
import Navbar from './components/navbar.tsx';
import LoadingPage from './components/loadingPage.tsx';
import Footer from './components/footer.tsx';
import './main.css'

const FAVICON_URLS = [
  '/favicon1.ico',
  '/favicon2.ico',
  '/favicon3.ico',
  '/favicon4.ico',
];

const RESTAURANTES = [
  { id: 1, label: "Diver Plaza" },
  { id: 2, label: "Nuestro Bogotá" },
  { id: 3, label: "Buró 25" },
  { id: 4, label: "Fontibón" },
];

const INITIAL_SELECTED_ITEM = RESTAURANTES.find(restaurant => restaurant.label === "Selecciona tu sede");

function Index() {
  const [view, setView] = useState('Inicio');
  const iconIndex = Math.floor(Math.random() * FAVICON_URLS.length) + 1;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  const [selectedItem, setSelectedItem] = useState(INITIAL_SELECTED_ITEM);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Helmet>
            <link rel="icon" href={FAVICON_URLS[iconIndex - 1]} />
          </Helmet>
          <div>
            <Navbar
              setView={setView}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              restaurantes={RESTAURANTES}
            />
            <Sobrenosotros />
            <Footer setView={setView} />
          </div>
        </>
      )}
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));