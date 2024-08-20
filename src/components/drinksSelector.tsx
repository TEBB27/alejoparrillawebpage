import React, { useState } from 'react';
import categories from '../../src/json/categories.json';
import SeeMenu from './seeMenu';

interface DrinkSubCategory {
    id: number;
    name: string;
    description: string;
    image: string;
}

interface DrinkSelectorProps {
    selectedItemName: string | null;
}

const DrinkSelector: React.FC<DrinkSelectorProps> = ({ selectedItemName }) => {
    const drinkCategory = categories.find(category => category.name === 'Bebidas');

    const subCategoriesComponent = drinkCategory && drinkCategory.subcategories && (
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
    const [activeComponent, setActiveComponent] = useState(subCategoriesComponent);

    const handleClickSubCategory = (subCategory: DrinkSubCategory): void => {
        setActiveComponent(<SeeMenu category={subCategory.name} selectedItemName={selectedItemName} />);
    };

    return (
        <div>
            {activeComponent}
        </div>
    );
}

export default DrinkSelector;