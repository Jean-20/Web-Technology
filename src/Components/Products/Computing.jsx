import React from 'react';
import { useNavigate } from 'react-router-dom';

const ComputingData = [
    {
        id: 1,
        nombre: "Apple MacBook Pro",
        categoria: "Laptops",
        marca: "Apple",
        precio: "$1,299.00",
        stock: "5",
        descripcion: "Apple M1 chip with 8-core CPU and 16-core Neural Engine, 13-inch Retina display.",
        url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxhYmxvdC1wcm98ZW51fDB8fHx8MTY0NzY2MjM5NA&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
        id: 2,
        nombre: "Dell XPS 13",
        categoria: "Laptops",
        marca: "Dell",
        precio: "$999.00",
        stock: "8",
        descripcion: "Dell XPS 13 with Intel Core i7, 16GB RAM, and 512GB SSD.",
        url: "https://images.unsplash.com/photo-1587039841348-79b5e4a4e9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGRlbGwleHBzfGVufDB8fHx8MTY0NzY3MzAwNw&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
        id: 3,
        nombre: "HP Spectre x360",
        categoria: "Laptops",
        marca: "HP",
        precio: "$1,199.00",
        stock: "10",
        descripcion: "HP Spectre x360, 13.3-inch 4K touchscreen, Intel Core i7, 16GB RAM.",
        url: "https://images.unsplash.com/photo-1581793129846-2436f81cd5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDExfHxIUCUyMFNwZWN0cmV8ZW58MHx8fHwxNjQ3NjczMDc2&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
        id: 4,
        nombre: "Lenovo ThinkPad X1 Carbon",
        categoria: "Laptops",
        marca: "Lenovo",
        precio: "$1,499.00",
        stock: "7",
        descripcion: "Lenovo ThinkPad X1 Carbon, Intel Core i7, 16GB RAM, 1TB SSD.",
        url: "https://images.unsplash.com/photo-1592882434778-6b1467b7c6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyNHx8bGVub3ZvJTIwYW5kdG8lMjBuYW1lfGVufDB8fHx8MTY0NzY3MzEyNA&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
        id: 5,
        nombre: "Asus ZenBook 14",
        categoria: "Laptops",
        marca: "Asus",
        precio: "$899.00",
        stock: "12",
        descripcion: "Asus ZenBook 14, 14-inch FHD, Intel Core i5, 8GB RAM, 256GB SSD.",
        url: "https://images.unsplash.com/photo-1587990243896-76e5b76e23b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGFzdXMlMjB6ZW5ib29rfGVufDB8fHx8MTY0NzY3MzM5Mg&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
        id: 6,
        nombre: "Microsoft Surface Laptop 4",
        categoria: "Laptops",
        marca: "Microsoft",
        precio: "$1,299.99",
        stock: "4",
        descripcion: "Microsoft Surface Laptop 4, 13.5-inch, Intel Core i5, 16GB RAM, 512GB SSD.",
        url: "https://images.unsplash.com/photo-1604332549625-cb167f1f0c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1pY3Jvc29mdCUyMHN1cmZhY2V8ZW58MHx8fHwxNjQ3NjczNDI0&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
        id: 7,
        nombre: "Razer Blade Stealth 13",
        categoria: "Laptops",
        marca: "Razer",
        precio: "$1,599.00",
        stock: "3",
        descripcion: "Razer Blade Stealth 13, Gaming laptop with Intel Core i7, 16GB RAM, 512GB SSD.",
        url: "https://images.unsplash.com/photo-1565060732157-fc25540ff7d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE4fHxSYXplciUyMEJsYWRlJTIwU3RlYXRoJTIwMTN8ZW58MHx8fHwxNjQ3NjczNDM0&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
        id: 8,
        nombre: "Acer Swift 3",
        categoria: "Laptops",
        marca: "Acer",
        precio: "$749.00",
        stock: "10",
        descripcion: "Acer Swift 3, 14-inch, AMD Ryzen 5, 8GB RAM, 512GB SSD.",
        url: "https://images.unsplash.com/photo-1602320596700-b9cd056441ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyMXx8QWNlciUyMFN3aWZ0JTNELXN3aWZ0JTIwMyUyMDl8ZW58MHx8fHwxNjQ3NjczNDQ5&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
        id: 9,
        nombre: "Logitech MX Master 3",
        categoria: "Accessories",
        marca: "Logitech",
        precio: "$99.99",
        stock: "25",
        descripcion: "Logitech MX Master 3, Advanced Wireless Mouse.",
        url: "https://images.unsplash.com/photo-1593008782433-4f832067c407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI3fHxMb2dpdGVjaCUyME1YJTIwTWFzdGVyfGVufDB8fHx8MTY0NzY3MzQ2Mw&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
        id: 10,
        nombre: "Dell UltraSharp U2720Q",
        categoria: "Accessories",
        marca: "Dell",
        precio: "$649.99",
        stock: "8",
        descripcion: "Dell UltraSharp 27 4K USB-C Monitor.",
        url: "https://images.unsplash.com/photo-1587887819198-4e49b1f4ec9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxEZWxsJTIwVWx0cmFTaGFwfGVufDB8fHx8MTY0NzY3MzQ3Mg&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
        id: 11,
        nombre: "Samsung T7 Portable SSD",
        categoria: "Accessories",
        marca: "Samsung",
        precio: "$139.99",
        stock: "15",
        descripcion: "Samsung T7 Portable SSD, 1TB, USB 3.2 Gen 2, NVMe Interface.",
        url: "https://images.unsplash.com/photo-1592000510607-1c5071f7b2f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI0fHxTYW1zdW5nJTIwVDclMjBQb3J0YWJsZSUyMFNTRDEwfGVufDB8fHx8MTY0NzY3MzQ4Mw&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
        id: 12,
        nombre: "Corsair Vengeance LPX 16GB RAM",
        categoria: "Accessories",
        marca: "Corsair",
        precio: "$79.99",
        stock: "20",
        descripcion: "Corsair Vengeance LPX 16GB (2 x 8GB) DDR4-3200 C16 Memory Kit.",
        url: "https://images.unsplash.com/photo-1593011030902-b8e1ee9c8a5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDMyfHxDb3JzaGFpciUyMFZlbmdlYW5jZXxlbnwwfHx8fDE2NDc2NzM0OTE&ixlib=rb-1.2.1&q=80&w=1080"
    },
];

const Computing = () => {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate('/details', { state: { product } });
    };

    return (
        <div className="flex justify-center items-center min-h-screen mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {ComputingData.map((item) => (
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

export default Computing;
