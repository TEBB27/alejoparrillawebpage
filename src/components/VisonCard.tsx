import './Styles.css'
import './VisionCard.css'
import React, { useState } from 'react';

interface Vision {
  imageUrl: string;
  text: string;
  title: string;
}
const VisionCard: React.FC<Vision> = ({ imageUrl, text, title }) => {
  const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
  return(
    <div className={`container-vision-item ${isClicked ? 'clicked' : ''}`} onClick={handleClick} style={{backgroundImage:`url(${imageUrl})`}}>
      <div className='container-vision-item-div'>
        <h2 style={{textAlign:'center'}}>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
const VisionComponent = () => {
  return(
    <div className="container-vision">
      <VisionCard imageUrl="./images/vision/destino-culinario-de-referencia.webp" title="Destino culinario de referencia" text='En Alejo Parrilla, aspiramos a ser el destino culinario de referencia, liderando la industria gastronómica con inovación y tradición en cada plato. '/>
      <VisionCard imageUrl="./images/vision/punto-de-encuentro.webp" title="Punto de encuentro" text='Visualizamos nuestro restaurante como un punto de encuentro donde la excelencia de la parrilla se fusiona con la autenticidad de la cocina colombiana'/>
      <VisionCard imageUrl="./images/vision/experiencia-unica.webp" title="Experencia única" text='Buscamos marcar tendencias y crear recuerdos inolvidables para nuestros clientes, ofreciendo una experiencia única que refleje la autenticidad y la diversidad de nuestra oferta. '/>
      <VisionCard imageUrl="./images/vision/calidad-ante-todo.webp" title="Calidad ante todo " text='Nos esforzamos por ser reconocidos como Alejo Parrilla, un lugar donde la calidad de la parrilla y la calidez de la experiencia  se encuentran por deleitar a todos nuestos comensales.'/>
    </div>
  )
}
export default VisionComponent;