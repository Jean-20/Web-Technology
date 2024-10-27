import React from 'react';
import { useNavigate } from 'react-router-dom';

const GamingData = [
    {
        id: 1,
        title: "PlayStation 5",
        price: "$499.00",
        description: "Ultra-high speed SSD, 8K support, and haptic feedback with DualSense controller.",
        image: "https://images.unsplash.com/photo-1606818275817-7365c37cd437?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 2,
        title: "PlayStation 4 Pro",
        price: "$399.00",
        description: "4K gaming and entertainment, faster frame rates, and HDR technology.",
        image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 3,
        title: "The Last of Us Part II",
        price: "$59.99",
        description: "Action-adventure game with a deeply emotional story and intense combat.",
        image: "https://images.unsplash.com/photo-1622833801250-857ce1b379b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 4,
        title: "Spider-Man: Miles Morales",
        price: "$49.99",
        description: "Explore a snowy New York City and become Spider-Man in this stunning sequel.",
        image: "https://images.unsplash.com/photo-1617200555947-e67abfb7003c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    }
];

const Gaming = () => {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate('/details', { state: { product } });
    };

    return (
        <div className="flex justify-center items-center min-h-screen mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {GamingData.map((item) => ( // Cambiado a "GamingData"
                    <div
                        key={item.id}
                        className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transform transition-transform duration-300 hover:scale-105"
                        onClick={() => handleProductClick(item)}
                    >
                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="block font-sans text-base font-medium text-blue-gray-900">
                                    {item.title}
                                </p>
                                <p className="block font-sans text-base font-medium text-blue-gray-900">
                                    {item.price}
                                </p>
                            </div>
                            <p className="block font-sans text-sm text-gray-700 opacity-75">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gaming;
