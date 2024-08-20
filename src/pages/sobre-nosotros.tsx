import "../components/Styles.css";
import Carousel from "../components/carousel";
import CarouselUpToDown from "../components/swiperMision";
import VisionComponent from "../components/VisonCard";
import FilosofiaGallery from "../components/FilosofiaGallery";
import { useRestaurant } from '../context/RestaurantContext'; // Importa el hook personalizado

function Sobrenosotros() {
  const { selectedItem } = useRestaurant(); // Usamos el contexto para obtener el restaurante seleccionado

  return (
    <div className="overflow_hidden_SN">
      <div className="landing minHeight_paddingTop_SN landing_nosotros second">
        {/* Primera sección */}
        <h1 className="title orange_center_text">Sobre Nosotros</h1>
        <div className="sobre-nosotros-container">
          <div className="sobre-nosotros-container-item width_minWidth_color_SN">
            <div className="fontSize_padding_paddingTop_SN">
              <p>¡Bienvenidos a nuestros restaurantes! Disfruta de la mejor parrilla y platos típicos colombianos desde 1999. Ofrecemos gastronomía de calidad, con recetas tradicionales y sabores auténticos.</p>
              <p>Utilizamos los mejores insumos, frescos y naturales, y la mejor atención para hacer que tu experiencia en nuestros restaurantes sea única e inolvidable. Te invitamos a visitarnos y a comprobar por qué somos los mejores en Parrilla y platos típicos colombianos. ¡Te esperamos!</p>
              <div className="display_alignItems_justifyContent_flexWrap_SN">
                <div className="info-card">
                  <h2 className="subtitle">4+</h2>
                  <p>Restaurantes</p>
                </div>
                <div className="info-card">
                  <h2 className="subtitle">60+</h2>
                  <p>Platos</p>
                </div>
                <div className="info-card">
                  <h2 className="subtitle">45+</h2>
                  <p>Empleados</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sobre-nosotros-container-item box-sizing-width-padding_SN" style={{ backgroundImage: "url('./images/Imagen-interior.webp')" }}></div>
        </div>
      </div>

      {/* Segunda Sección */}
      <div className=' landing container Mision_Container_SN'>
        <h2 className="title_alt orange_center_text">Misión</h2>
        <CarouselUpToDown />
      </div>
      {/* Tercera Sección */}

      <div className=" second display_flexDirection_SN">
        <h2 className="title_alt orange_center_text">Visión</h2>
        <VisionComponent />
      </div>

      {/* Cuarta Sección */}
      <div className="landing FilosofiaContainer_SN">
        <h2 className='title_alt orange_center_text'>Nuestra Filosofia</h2>
        <FilosofiaGallery />
      </div>

      {/* Quinta Sección */}
      <div id="nuestros_restaurantes_container" className="second Nuestros_restaurantes_container">
        <h2 id='nuestros_restaurantes_title' className="title_alt orange_center_text">Nuestros restaurantes</h2>
        <Carousel selectedItemId={selectedItem ? selectedItem.id : null} />
      </div>
    </div>
  );
}

export default Sobrenosotros;
