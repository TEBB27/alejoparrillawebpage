// @ts-nocheck

import "./Styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import SeeMenu from "./seeMenu";
import DrinkSelector from "./drinksSelector";
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

interface NewMenuProps {
    selectedItemName: string | null;
}

const NewMenu: React.FC<NewMenuProps> = ({ selectedItemName }) => {
    const [category, setCategory] = useState('Hamburguesas');
    const [isMenuActive, setMenuActive] = useState(false);
    const [activeComponent, setActiveComponent] = useState(<SeeMenu category={category} selectedItemName={selectedItemName} />);
    const handleClick = () => {
        setMenuActive(!isMenuActive);
    };
    const handleTitleClick = () => {
        setMenuActive(false);
    }

    // En caso que esos hijueputas se pongan cansones y quieran que al elegir una categoría x de bebidas, el título lo especifique, 
    // dejar el h2 dentro del setActiveComponent y cambiar la estructura en drinksSelector.tsx. -Tomás
    const handleClickCategory = (categoryName) => {
        if (categoryName === 'Bebidas') {
            setCategory('Bebidas');
            setActiveComponent(<DrinkSelector selectedItemName={selectedItemName} />);
        } else {
            setCategory(categoryName);
            setActiveComponent(<SeeMenu category={categoryName} selectedItemName={selectedItemName} />);
            console.log(categoryName);
        }
        handleClick();
    };

    return (
        <div className="newMenu third">
            <h1 className="animated_title" onClick={handleTitleClick}>Menú {selectedItemName}</h1>
            <div>
                {isMenuActive ? (
                    <div className="bento_menu">
                        <div className="bento_menu_navbar">
                            <FontAwesomeIcon className="bento_navbar" icon={faCircleChevronLeft} onClick={handleClick} />
                            <h2 className="bento_title bento_navbar">{category}</h2>
                        </div>
                        {activeComponent}
                    </div>
                ) : (<div className="newMenu_container">
                    {categories.map((category: Category, index: number) => (
                        <div
                            key={category.id}
                            className="newMenu_categoryCard"
                            style={{ backgroundImage: `url(${category.imagePath})` }}
                            onClick={() => handleClickCategory(category.name)}
                        >
                            <div className="newMenu_categoryCard newMenu_animateUp" >
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