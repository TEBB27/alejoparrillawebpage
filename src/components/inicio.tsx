import "./Styles.css";

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
                        <a className="main-button" href="menu.html">Menú en línea</a>
                        <button className="second-button" onClick={() => window.location.href = restaurantLink}>Pide ya</button>
                    </div>
                </div>
                <div className="column has-image">
                    <img src='./images/inicio/imagen-conjunta-2.webp' alt="Descriptive text" style={{ borderRadius: '10% 20%' }} className="restaurant_image main_image" />
                </div>
            </div>

            <div className="container second">
                <div className="column">
                    <h2 className='title_alt_IN'>Conoce sobre nosotros</h2>
                    <div className="line">
                        <p style={{ color: 'white' }}>
                            Alejo Parrilla es un lugar para compartir momentos especiales con tus seres queridos. Ofrecemos un ambiente cálido y acogedor, con un servicio atento y personalizado.
                        </p>
                        <a className="third-button" href="nosotros.html">Sobre Nosotros</a>
                    </div>

                </div>
                <div className="column has-image">
                    <img src='./images/inicio/imagen-conjunta.webp' style={{ borderRadius: '20% 10%' }} alt='Imagen de hamburguesa representativa' className="restaurant_image" />
                </div>
            </div>

            <div className="container third">
                <div className="column has-image">
                    <img src='./images/inicio/imagen-seccion-menu.webp' style={{ borderRadius: '10% 20%' }} alt='Parrilla yummy' className="restaurant_image" />
                </div>
                <div className="column">
                    <h2 className='title_alt_IN'>Nuestro menú</h2>
                    <div className="line">
                        <p style={{ color: 'white' }}>
                            Nuestro menu tiene diferentes variedades de platos distribuidos entre carnes, pescados, comidas rapidas, bolws y demas.
                        </p>
                        <a className="third-button" href="menu.html">Menu en linea</a>
                    </div>

                </div>
            </div>

        </div>
    );
};