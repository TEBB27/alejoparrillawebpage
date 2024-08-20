// @ts-nocheck

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Restaurant, RestaurantContextType } from '../types/restaurant';

const RestaurantContext = createContext<RestaurantContextType | undefined>(undefined);

export const useRestaurant = () => {
    const context = useContext(RestaurantContext);
    if (!context) {
        throw new Error('useRestaurant must be used within a RestaurantProvider');
    }
    return context;
};

interface RestaurantProviderProps {
    children: ReactNode;
}

export const RestaurantProvider = ({ children }: RestaurantProviderProps) => {
    const restaurantes: Restaurant[] = [
        { id: 1, label: "Diver Plaza" },
        { id: 2, label: "Nuestro Bogotá" },
        { id: 3, label: "Buró 25" },
        { id: 4, label: "Fontibón" },
    ];

    const [selectedItem, setSelectedItem] = useState<Restaurant | undefined>(undefined);

    return (
        <RestaurantContext.Provider value={{ selectedItem, setSelectedItem, restaurantes }}>
            {children}
        </RestaurantContext.Provider>
    );
};
