import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = "Hola, soy una empresa interesada en sus productos de sal. Me gustaría recibir información sobre precios y disponibilidad.";
    const phoneNumber = "51999999999";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={24} />
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-gray-800 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
            Consultas B2B
          </div>
          <div className="w-3 h-3 bg-gray-800 transform rotate-45 absolute top-full right-3 -mt-1"></div>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppFloat;