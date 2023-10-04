import { useState } from "react";
import { Link } from "react-router-dom";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import caro4 from "../assets/servicereal.png";

function Services() {
  const services = [
    { id: 1, name: "Space 1", image: service1 },
    { id: 2, name: "Space 2", image: service2 },
    { id: 3, name: "Space 3", image: service3 },
    { id: 4, name: "Space 4", image: service4 },
    { id: 5, name: "Space 5", image: service5 },
    { id: 6, name: "Space 6", image: service1 },
    { id: 7, name: "Space 6", image: service1 },
    { id: 8, name: "Space 6", image: service1 },
    { id: 9, name: "Space 6", image: service1 },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  const handleCardHover = (id) => {
    setHoveredId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      {/* Starting Image */}
      <div
        className="relative"
        style={{
          width: "100%",
          height: "70vh",
        }}
      >
        <img
          src={caro4}
          alt="Background Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(40%)", // Reduce brightness if needed
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add shadow to text
          }}
        >
          Our Services
        </div>
      </div>

      {/* Existing Services Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative bg-white rounded-lg shadow"
            onMouseEnter={() => handleCardHover(service.id)}
            onMouseLeave={() => handleCardHover(service.id)}
            style={{
              maxWidth: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <div
              className="overflow-hidden"
              style={{ paddingBottom: "56.25%", position: "relative" }}
            >
              <img
                src={service.image}
                alt={service.name}
                className={`object-cover object-center w-full h-full ${
                  hoveredId === service.id ? "opacity-75" : "opacity-100"
                }`}
                style={{ position: "absolute" }}
              />
            </div>
            {hoveredId === service.id && (
              <div
                className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-75 transition-opacity duration-300"
                style={{ width: "100%", height: "100%" }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.name}
                </h3>

                <Link to="/incube">
                  <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                    Book
                  </button>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
