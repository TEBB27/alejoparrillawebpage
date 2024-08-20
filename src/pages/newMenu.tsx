// @ts-nocheck

import "../components/Styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';
import SeeMenu from "../components/seeMenu";
import { Swiper, SwiperSlide } from '../../node_modules/swiper/swiper-react';
import '../../node_modules/swiper/swiper.min.css';
import '../../node_modules/swiper/swiper-bundle.css';
import '../../node_modules/swiper/modules/effect-cube.min.css';
import categories from '../../src/json/categories.json';

interface Category {
    id: number;
    name: string;
    description: string;
    image: string;
}
interface NewMenuProps {
    selectedItemName: string | null;
}
interface DrinkSubCategory {
    id: number;
    name: string;
    description: string;
    image: string;
}
interface DrinkSelectorProps {
    selectedItemName: string | null;
    drinksComponent: React.ReactNode;
    handleClickSubCategory: (subCategory: DrinkSubCategory) => void;
}

const NewMenu: React.FC<NewMenuProps> = ({ selectedItemName }) => {
    const [category, setCategory] = useState('Hamburguesas');
    const [isMenuActive, setMenuActive] = useState(false);
    const [activeComponent, setActiveComponent] = useState<React.ReactNode | null>(null);
    const [drinksComponent, setDrinksComponent] = useState<React.ReactNode | null>(null);
    const [initialDrinksComponent, setInitialDrinksComponent] = useState(null);

    useEffect(() => {
        const drinkCategory = categories.find(category => category.name === 'Bebidas');

        if (drinkCategory && drinkCategory.subcategories) {
            const subCategoriesComponent = (
                <div className="newMenu_container drinks">
                    {drinkCategory.subcategories.map((subCategory) => (
                        <div
                            key={subCategory.id}
                            className="newMenu_categoryCard"
                            style={{ backgroundImage: `url(${subCategory.image})` }}
                            onClick={() => handleClickSubCategory(subCategory)}
                        >
                            <div className="newMenu_categoryCard newMenu_animateUp" >
                                <h2>{subCategory.name}</h2>
                                <p>{subCategory.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            );

            setDrinksComponent(subCategoriesComponent);
            setInitialDrinksComponent(subCategoriesComponent);
        }
    }, []);


    const handleClickSubCategory = (subCategory: DrinkSubCategory): void => {
        setDrinksComponent(<SeeMenu category={subCategory.name} selectedItemName={selectedItemName} />);
    };

    const DrinkSelector: React.FC<DrinkSelectorProps> = ({ selectedItemName, drinksComponent, handleClickSubCategory }) => {
        return (
            <div>
                {drinksComponent !== undefined ? drinksComponent : initialDrinksComponent}
            </div>
        );
    }

    useEffect(() => {
        if (category === 'Bebidas') {
            setActiveComponent(<DrinkSelector selectedItemName={selectedItemName} drinksComponent={drinksComponent} handleClickSubCategory={handleClickSubCategory} />);
        } else {
            setActiveComponent(<SeeMenu category={category} selectedItemName={selectedItemName} />);
        }
    }, [category, drinksComponent]);

    const handleClick = () => {
        if (drinksComponent !== undefined) {
            setDrinksComponent(undefined);
        } else {
            setMenuActive(!isMenuActive);
        }

    };
    const handleTitleClick = () => {
        setMenuActive(false);
        setDrinksComponent(initialDrinksComponent);
    }

    const handleClickCategory = (categoryName) => {
        if (categoryName === 'Bebidas') {
            setCategory('Bebidas');
            setActiveComponent(<DrinkSelector selectedItemName={selectedItemName} />);
        } else {
            setCategory(categoryName);
            setActiveComponent(<SeeMenu category={categoryName} selectedItemName={selectedItemName} />);
        }
        handleClick();
        console.log(categoryName);
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