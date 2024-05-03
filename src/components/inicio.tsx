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
    
    const SecondButton = () => {
        if (selectedItemId == 4) {
            return(
                <div className="button-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
  <button className="main-button" style={{ flexGrow: 1, minWidth: '100px' }} onClick={() => handleLinkClick('Menú')}>Menú en línea</button>
  <button style={{ margin: '0 4px', minWidth: '50px', flexGrow: 1 }} className="second-button" onClick={() => window.open(restaurantLink, '_blank')}>Rappi</button>
  <button style={{ margin: '0 4px', minWidth: '50px', flexGrow: 1 }} className="second-button" onClick={() => window.open('https://wa.me/+573214607611', '_blank')}>Domicilios</button>
</div>
            );
    }else{
        return(
            <div className="button-container">
                <button className="main-button" onClick={() => handleLinkClick('Menú')}>Menú en línea</button>
                <button className="second-button" onClick={() => window.open(restaurantLink, '_blank')}>Pide en línea</button>
            </div>
        );
    }
}

    return (
        <div>
            <div className="container landing">
                <div className="column-main">
                    <div>
                        <h1 className="title">Tu parrilla, AlejoParilla</h1>
                    </div>
                        <SecondButton/>
                </div>
                <div className="column has-image">
                    <img src='./images/inicio/imagen-conjunta-2.webp' alt="Descriptive text" style={{borderRadius:'10% 20%'}} className="restaurant_image main_image" />
                </div>
            </div>

            <div className="container second">
                <div className="column">
                    <h2 className='title_alt_IN'>Conoce sobre nosotros</h2>
                    <div className="line">
                        <p style={{ color: 'white' }}>
                        Alejo Parrilla es un lugar para compartir momentos especiales con tus seres queridos. Ofrecemos un ambiente cálido y acogedor, con un servicio atento y personalizado.
                        </p>
                        <button className="third-button" onClick={() => handleLinkClick('Nosotros')}>Sobre Nosotros</button>
                    </div>

                </div>
                <div className="column has-image">
                    <img src='./images/inicio/imagen-conjunta.webp' style={{borderRadius:'20% 10%'}} alt='Imagen de hamburguesa representativa' className="restaurant_image" />
                </div>
            </div>

            <div className="container third">
                <div className="column has-image">
                    <img src='./images/inicio/imagen-seccion-menu.webp' style={{borderRadius:'10% 20%'}} alt='Parrilla yummy' className="restaurant_image" />
                </div>
                <div className="column">
                    <h2 className='title_alt_IN'>Nuestro menú</h2>
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