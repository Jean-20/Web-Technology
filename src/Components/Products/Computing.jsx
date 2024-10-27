import React from 'react';
import { useNavigate } from 'react-router-dom';

const ComputingData = [
    {
        id: 1,
        title: "Apple MacBook Pro",
        price: "$1,299.00",
        description: "Apple M1 chip with 8-core CPU and 16-core Neural Engine, 13-inch Retina display.",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxhptb3BwfGVufDB8fHx8MTY0NzY2MjM5NA&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
        id: 2,
        title: "Dell XPS 13",
        price: "$1,150.00",
        description: "Intel Core i7, 16GB RAM, 512GB SSD, 13.4-inch FHD display with InfinityEdge.",
        image: "https://images.unsplash.com/photo-1559028012-481c42b3a76a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    }
];

const Computing = () => {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate('/details', { state: { product } });
    };

    return (
        <div className="flex justify-center items-center min-h-screen mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {ComputingData.map((item) => ( // Cambiado a "ComputingData"
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

export default Computing;
