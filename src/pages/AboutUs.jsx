import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const AboutUs = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué productos ofrecen en su tienda?",
      answer: "Ofrecemos una amplia gama de productos de tecnología, incluyendo consolas PS4 y PS5, juegos, laptops, componentes para PC y teléfonos móviles.",
    },
    {
      question: "¿Cómo puedo realizar un pedido?",
      answer: "Puedes realizar un pedido directamente a través de nuestra página web. Simplemente selecciona los productos que deseas y sigue el proceso de compra.",
    },
    {
      question: "¿Tienen una sección de contacto?",
      answer: "Sí, contamos con un apartado de contacto donde puedes enviarnos tus consultas o inquietudes. Nos comprometemos a responderte lo más pronto posible.",
    },
    {
      question: "¿Dónde están ubicadas sus sedes?",
      answer: "Nuestras sedes están ubicadas en diferentes ciudades. Puedes encontrar la información de las sedes en la sección correspondiente de nuestra página web.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos varios métodos de pago, incluyendo tarjetas de crédito, débito y transferencias bancarias para mayor comodidad.",
    },
  ];

  return (
    <main className="mt-20">
      <section className="flex flex-col justify-center items-center px-5 py-3 mb-10 bg-black text-white container-md">
        <h1 className="text-3xl font-bold">Technology+</h1>
        <p className="text-center mt-4">
          ¡Bienvenido a Technology+, el lugar ideal para todas tus necesidades tecnológicas!
          <br />
          Ubicado en el vibrante corazón de la ciudad, Technology + se erige como el destino definitivo para aquellos que
          buscan productos de alta calidad en tecnología. Desde consolas de videojuegos hasta computadoras y teléfonos,
          ofrecemos todo lo que necesitas para estar a la vanguardia.
        </p>
        <button
          type="button"
          className="mt-4 px-4 py-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          onClick={openModal}
        >
          Video presentación
        </button>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div
            className="bg-white rounded shadow-lg p-4 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Evitar el cierre al hacer clic en el modal
          >
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-bold">Video presentación</h1>
              <button
                type="button"
                className="text-black"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <div className="mt-2">
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed/HQfF5XRVXjU?si=ITzXzHgz9vDL-qGs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <h1 className="text-2xl font-bold mb-4 text-center mt-10">Preguntas Frecuentes</h1>
      <section className="max-w-6xl mx-auto p-4 mt-4 bg-white border border-black rounded-lg shadow-lg mb-10">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-2">
            <button
              className="flex justify-between w-full text-left text-lg font-medium text-black py-2 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {openIndex === index && (
              <p className="text-black mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </section>

      {/* WhatsApp Contact */}
      <div className="contacto fixed bottom-0 end-0 mb-4 mr-4">
        <a href="https://chat.whatsapp.com/IGmNSCMbcRvBq8yi5ccrUH" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" />
        </a>
      </div>
    </main>
  );
};

export default AboutUs;