import React from 'react';
import categories from '../../src/json/categories.json';

interface DrinkSubCategory {
    id: number;
    name: string;
    description: string;
    image: string;
}

interface DrinkCategory {
    id: number;
    name: string;
    description: string;
    image: string;
    subcategories: DrinkSubCategory[];
}

const DrinkSelector: React.FC = () => {
    // Encuentra la categoría de bebidas en tus datos
    const drinkCategory = categories.find(category => category.name === 'Bebidas');

    const handleClickSubCategory = (subCategory: DrinkSubCategory): void => {
        // Aquí puedes definir lo que sucede cuando se hace clic en una subcategoría
    };

    return (
        <div className="newMenu">
            <h1 className="animated_title">Menú de Bebidas</h1>
            <div className="newMenu_menu">
                {drinkCategory && drinkCategory.subcategories && drinkCategory.subcategories.map((subCategory) => (
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
        </div>
    );
}

export default DrinkSelector;