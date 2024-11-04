import React from 'react';
import { useNavigate } from 'react-router-dom';

const PccompsData = [
    {
        id: 1,
        nombre: "PlayStation 5",
        categoria: "componentes",
        marca: "Sony",
        precio: "$499.00",
        stock: "10",
        descripcion: "Ultra-high speed SSD, 8K support, and haptic feedback with DualSense controller.",
        url: "https://images.unsplash.com/photo-1606818275817-7365c37cd437?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 1,
        nombre: "PlayStation 5",
        categoria: "componentes",
        marca: "Sony",
        precio: "$499.00",
        stock: "10",
        descripcion: "Ultra-high speed SSD, 8K support, and haptic feedback with DualSense controller.",
        url: "https://images.unsplash.com/photo-1606818275817-7365c37cd437?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 1,
        nombre: "PlayStation 5",
        categoria: "componentes",
        marca: "Sony",
        precio: "$499.00",
        stock: "10",
        descripcion: "Ultra-high speed SSD, 8K support, and haptic feedback with DualSense controller.",
        url: "https://images.unsplash.com/photo-1606818275817-7365c37cd437?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 1,
        nombre: "PlayStation 5",
        categoria: "componentes",
        marca: "Sony",
        precio: "$499.00",
        stock: "10",
        descripcion: "Ultra-high speed SSD, 8K support, and haptic feedback with DualSense controller.",
        url: "https://images.unsplash.com/photo-1606818275817-7365c37cd437?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    },
];

const Pccomps = () => {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate('/details', { state: { product } });
    };

    return (
        <div className="flex justify-center items-center min-h-screen mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {PccompsData.map((item) => (
                    <div
                        key={item.id}
                        className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transform transition-transform duration-300 hover:scale-105"
                        onClick={() => handleProductClick(item)}
                    >
                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                            <img
                                src={item.url}
                                alt={item.nombre}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="block font-sans text-base font-medium text-blue-gray-900">
                                    {item.nombre}
                                </p>
                                <p className="block font-sans text-base font-medium text-blue-gray-900">
                                    {item.precio}
                                </p>
                            </div>
                            <p className="block font-sans text-sm text-gray-700 opacity-75">
                                {item.descripcion}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pccomps;
