import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import { Inicio } from './pages/inicio.tsx';
import Sobrenosotros from './pages/sobre-nosotros';
import { Vinculate } from './pages/vinculate.tsx';
import NewMenu from './pages/newMenu';

import Navbar from './components/navbar';
import LoadingPage from './components/loadingPage';
import Footer from './components/footer.tsx';
import { RestaurantProvider } from './context/RestaurantContext.tsx';
import ScrollToTop from './components/ScrollToTop';  // Importa el nuevo componente

const faviconUrls = [
  '/favicon1.ico',
  '/favicon2.ico',
  '/favicon3.ico',
  '/favicon4.ico',
];

function App() {
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

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Helmet>
            <link rel="icon" href={faviconUrls[iconIndex - 1]} />
          </Helmet>
          <RestaurantProvider>
            <Router>
              <ScrollToTop />  {/* Añade el componente ScrollToTop aquí */}
              <Navbar />
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/nosotros" element={<Sobrenosotros />} />
                <Route path="/contacto" element={<Vinculate />} />
                <Route path="/menu" element={<NewMenu
                  selectedItemName={"Alejo Parrilla"}
                />} />
              </Routes>
              <Footer />
            </Router>
          </RestaurantProvider>
        </>
      )}
    </>
  );
}

export default App;
