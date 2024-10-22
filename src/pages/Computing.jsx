import React from 'react';

const computingData = [
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
    },
    {
        id: 3,
        title: "HP Spectre x360",
        price: "$1,050.00",
        description: "2-in-1 laptop with a 13.3-inch touchscreen, Intel Core i7 and 16GB RAM.",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6d82d89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 4,
        title: "Samsung UHD Monitor",
        price: "$499.00",
        description: "32-inch 4K UHD curved monitor with HDR and stunning picture quality.",
        image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 5,
        title: "LG UltraWide Monitor",
        price: "$399.00",
        description: "34-inch UltraWide monitor with QHD resolution and vibrant color accuracy.",
        image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 6,
        title: "Acer Predator Laptop",
        price: "$1,499.00",
        description: "High-performance gaming laptop with Intel Core i7 and NVIDIA GeForce RTX 3080.",
        image: "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    }
];

const Computing = () => {
    return (
        <div className="flex justify-center items-center min-h-screen mt-16"> {/* Añadido margin-top aquí */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {computingData.map((item) => (
                    <div key={item.id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transform transition-transform duration-300 hover:scale-105">
                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    {item.title}
                                </p>
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    {item.price}
                                </p>
                            </div>
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                                {item.description}
                            </p>
                        </div>
                        <div className="p-6 pt-0">
                            <button
                                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                type="button">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Computing;
