import "./Styles.css";
import restaurant from '../assets/Nosotros-Fachada-AlejoParrilla.png';
import parrilla from '../assets/parrila.png';


export const Inicio = ({ setView, selectedItemId }: { setView: (view: string) => void, selectedItemId: number | null; }): JSX.Element => {

    const handleLinkClick = (view: string) => {
        setView(view);
        window.scrollTo(0, 0);
    };

    let restaurantLink = '';

    switch (selectedItemId) {
        case 1:
            restaurantLink = 'https://www.rappi.com.co/restaurantes/900043120-alejo-parrilla';
            break;
        case 2:
            restaurantLink = 'https://www.rappi.com.co/restaurantes/900248801-alejo-parrilla';
            break;
        case 3:
            restaurantLink = 'https://www.rappi.com.co/restaurantes/900043122-alejo-parrilla';
            break;
        case 4:
            restaurantLink = 'https://www.rappi.com.co/restaurantes/900043122-alejo-parrilla';
            break;
        default:
            restaurantLink = 'https://www.rappi.com.co/restaurantes/delivery/25071-alejo-parrilla';
    }

    return (
        <div>
            <div className="container landing">
                <div className="column-main">
                    <div>
                        <h1 className="title">Tu parrilla, AlejoParilla</h1>
                    </div>

                    <div className="button-container">
                        <button className="main-button" onClick={() => handleLinkClick('Menú')}>Menú en línea</button>
                        <button className="second-button" onClick={() => window.location.href = restaurantLink}>Pide ya</button>
                    </div>
                </div>
                <div className="column has-image">
                    <img src={restaurant} alt="Descriptive text" className="restaurant_image main_image" />
                </div>
            </div>

            <div className="container second">
                <div className="column">
                    <h2 className='title_alt_IN'>Conoce sobre nosotros</h2>
                    <div className="line">
                        <p style={{ color: 'white' }}>
                            Nuestro menu tiene diferentes variedades de platos distribuidos entre carnes, pescados, comidas rapidas, bolws y demas.
                        </p>
                        <button className="third-button" onClick={() => handleLinkClick('Nosotros')}>Sobre Nosotros</button>
                    </div>

                </div>
                <div className="column has-image">
                    <img src={parrilla} alt='Parrilla yummy' className="restaurant_image" />
                </div>
            </div>

            <div className="container third">
                <div className="column has-image">
                    <img src={parrilla} alt='Parrilla yummy' className="restaurant_image" />
                </div>
                <div className="column">
                    <h2 className='title_alt_IN'>Nuestro menu</h2>
                    <div className="line">
                        <p style={{ color: 'white' }}>
                            Nuestro menu tiene diferentes variedades de platos distribuidos entre carnes, pescados, comidas rapidas, bolws y demas.
                        </p>
                        <button className="third-button" onClick={() => handleLinkClick('Menú')}>Menu en linea</button>
                    </div>

                </div>
            </div>

        </div>
    );
};