import React from 'react';

const phonesData = [
    {
        id: 1,
        title: "iPhone 14 Pro",
        price: "$999.00",
        description: "6.1-inch Super Retina XDR display with ProMotion and always-on display.",
        image: "https://images.unsplash.com/photo-1606813906843-d7cabd0e5435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 2,
        title: "Samsung Galaxy S21",
        price: "$799.00",
        description: "64MP high resolution camera, 8K video recording, and 120Hz display.",
        image: "https://images.unsplash.com/photo-1612277790470-520705d612d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 3,
        title: "Google Pixel 6",
        price: "$699.00",
        description: "Google's own Tensor processor, 50MP camera, and real-time translation features.",
        image: "https://images.unsplash.com/photo-1630440202177-fcf86da03b8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 4,
        title: "OnePlus 9 Pro",
        price: "$899.00",
        description: "120Hz Fluid Display, Qualcomm Snapdragon 888, and Hasselblad camera for mobile.",
        image: "https://images.unsplash.com/photo-1614678660209-64e42e260904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    }
];

const Phones = () => {
    return (
        <div className="flex justify-center items-center min-h-screen mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {phonesData.map((phone) => (
                    <div key={phone.id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transform transition-transform duration-300 hover:scale-105">
                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                            <img
                                src={phone.image}
                                alt={phone.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    {phone.title}
                                </p>
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    {phone.price}
                                </p>
                            </div>
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                                {phone.description}
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

export default Phones;
