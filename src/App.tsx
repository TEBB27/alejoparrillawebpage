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
import ScrollToTop from './components/ScrollToTop';
import AdminApp from './AdminApp';  // Importa AdminApp

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
      setLoading(false);
    };
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
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
              <ScrollToTop />
              <Routes>
                {/* Rutas públicas con Navbar y Footer */}
                <Route path="/" element={<><Navbar /><Inicio /><Footer /></>} />
                <Route path="/nosotros" element={<><Navbar /><Sobrenosotros /><Footer /></>} />
                <Route path="/contacto" element={<><Navbar /><Vinculate /><Footer /></>} />
                <Route path="/menu" element={<><Navbar /><NewMenu selectedItemName={"Alejo Parrilla"} /><Footer /></>} />

                {/* Ruta del admin con su propio layout */}
                <Route path="/admin/*" element={<AdminApp />} />
              </Routes>
            </Router>
          </RestaurantProvider>
        </>
      )}
    </>
  );
}

export default App;