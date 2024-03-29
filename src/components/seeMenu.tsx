// @ts-nocheck

import { useState, useEffect, useRef } from 'react';
import "./Styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper.min.css';
import '../../node_modules/swiper/swiper-bundle.css';
import '../../node_modules/swiper/modules/effect-cube.min.css';
import allMenu from '../../src/json/allmenu.json';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactCardFlip from 'react-card-flip';
import rappi from '../assets/rappi-alt.svg';
import { useMediaQuery } from 'react-responsive';

interface MenuItem {
    id: number;
    name: string;
    description: string;
    category: string;
    price: string;
    image: string;
    is_available: boolean;
}

interface SeeMenuProps {
    category: string;
    selectedItemName: string | null;
}

function getLinkByIdAndLocation(id, location) {
    // Busca el item con el id dado
    const item = allMenu.find(item => item.id === id);

    // Si el item existe y tiene un link para la location dada, devuelve ese link
    if (item && item.locations && item.locations[location]) {
        return item.locations[location];
    }

    // Si el item no existe o no tiene un link para la location dada, devuelve null
    return "https://www.rappi.com.co/restaurantes/delivery/25071-alejo-parrilla";
}

const SeeMenu: React.FC<SeeMenuProps> = ({ category, selectedItemName }) => {
    const [items, setItems] = useState<MenuItem[]>([]);
    const [slides, setSlides] = useState<MenuItem[][]>([]);
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const itemsPerSlide = isMobile ? 4 : 6;
    const swiperRef = useRef(null);


    //Hora de definir la URL del producto dependiendo del restaurante seleccionado



    useEffect(() => {
        const filteredItems = allMenu.filter(item => item.category === category);
        setItems(filteredItems);
    }, [category]);

    useEffect(() => {
        const newSlides = [];
        for (let i = 0; i < items.length; i += itemsPerSlide) {
            newSlides.push(items.slice(i, i + itemsPerSlide));
        }
        setSlides(newSlides);
    }, [items]);


    const [flippedState, setFlippedState] = useState<{ [key: number]: boolean }>({});
    const handleFlip = (id: number) => {
        setFlippedState(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                key={2}
            >
                {slides.map((slideItems, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid-container" >
                            {slideItems.map((item) => (
                                <ReactCardFlip isFlipped={flippedState[item.id] || false} flipDirection="vertical">
                                    <div
                                        className='newMenu_card newMenu_front'
                                        key={item.id}
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                        }}
                                        onClick={() => handleFlip(item.id)}
                                    >
                                    </div>
                                    <div
                                        className="newMenu_card newMenu_back"
                                        onClick={() => handleFlip(item.id)}
                                    >
                                        <div>
                                            <h3 className="newMenu_title">{item.name}</h3>
                                            <p className="newMenu_description">{item.description}</p>
                                            <div className="newMenu_price_order">
                                                <div>
                                                    <p className="newMenu_price">{item.price} COP</p>
                                                </div>
                                                <div>
                                                    <a href={getLinkByIdAndLocation(item.id, selectedItemName)} target="_blank" rel="noopener noreferrer">
                                                        <img src={rappi} alt="Rappi logo" className="rappi-logo newMenu_icon" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ReactCardFlip>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='swiper_controls'>
                <FontAwesomeIcon className="bento_navbutton" icon={faCircleChevronLeft} onClick={() => (swiperRef.current as Swiper)?.slidePrev()} />
                <FontAwesomeIcon className="bento_navbutton" icon={faCircleChevronRight} onClick={() => (swiperRef.current as Swiper)?.slideNext()} />
            </div>
        </div>
    );
}



export default SeeMenu;