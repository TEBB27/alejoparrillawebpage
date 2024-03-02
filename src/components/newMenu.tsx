// @ts-nocheck

import "./Styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import SeeMenu from "./seeMenu";
import { Swiper, SwiperSlide } from '../../node_modules/swiper/swiper-react';
import '../../node_modules/swiper/swiper.min.css';
import '../../node_modules/swiper/swiper-bundle.css';
import '../../node_modules/swiper/modules/effect-cube.min.css';
import categories from '../../src/json/categories.json';

interface category {
    id: number;
    name: string;
    description: string;
    image: string;
}

function NewMenu() {
    const [category, setCategory] = useState('Hamburguesas');
    const [isMenuActive, setMenuActive] = useState(false);
    const swiperRef = useRef(null);
    const handleClick = () => {
        setMenuActive(!isMenuActive);
    };
    const [activeButton, setActiveButton] = useState('Primera página');


    return (
        <div className="newMenu third">
            <h1>Menú</h1>
            <div>
                {isMenuActive ? (
                    <div className="bento_menu">
                        <div className="bento_menu_navbar">
                            <FontAwesomeIcon className="bento_navbar" icon={faCircleChevronLeft} onClick={handleClick} />
                            <h2 className="bento_title bento_navbar">{category}</h2>
                        </div>
                        <SeeMenu category={category} />
                    </div>
                ) : (<div className="newMenu_container">
                {categories.map((category: Category, index: number) => (
                    <div key={category.id} className="newMenu_categoryCard" style={{ backgroundImage: `url(${category.imagePath})` }} >
                        <div className="newMenu_categoryCard newMenu_animateUp" onClick={() => { setCategory(category.name); handleClick(); }}>
                            <h2>{category.name}</h2>
                            <p>{category.description}</p>
                        </div>
                    </div>
                ))}
            </div>
                )}
            </div>
        </div>
    );


}
export default NewMenu;