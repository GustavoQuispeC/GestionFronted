"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    title: "Herramientas",
    image:
      "https://firebasestorage.googleapis.com/v0/b/grupofamet-456604.firebasestorage.app/o/imagenes-ui%2Fcarousel%2Fherramientas.png?alt=media&token=ea663d4e-c3a6-4b5a-805b-6e4981bde4cb",
    link: "/producto/1",
  },
  {
    id: 2,
    title: "Herramientas de construcción",
    image:
      "https://firebasestorage.googleapis.com/v0/b/grupofamet-456604.firebasestorage.app/o/imagenes-ui%2Fcarousel%2Fherramientas2.png?alt=media&token=db66dc31-b025-4e1a-9249-e2c6e5dcac68",
    link: "/producto/2",
  },
  {
    id: 3,
    title: "Herramientas de jardinería",
    image:
      "https://firebasestorage.googleapis.com/v0/b/grupofamet-456604.firebasestorage.app/o/imagenes-ui%2Fcarousel%2Fherramientas3.png?alt=media&token=01b79f68-f8e4-4d5b-a730-401e71a79a5a",
    link: "/producto/3",
  },
  {
    id: 4,
    title: "cemento",
    image:
      "https://firebasestorage.googleapis.com/v0/b/grupofamet-456604.firebasestorage.app/o/imagenes-ui%2Fcarousel%2Fcemento.png?alt=media&token=1655f480-6d2c-460f-aefa-5d15f60d34b0",
    link: "/producto/3",
  },
];

const CarouselDemo = () => {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  // Cambio automático cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrent(index);

  return (
    <div className="relative w-full overflow-hidden mx-auto">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-full relative h-[600px] bg-black"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover opacity-90"
            />
            <button
              onClick={() => router.push(product.link)}
              className="absolute inset-0 bg-transparent hover:bg-black/10 transition-all"
            >
              <span className="absolute bottom-4 left-4 text-white text-lg bg-black/60 px-3 py-1 rounded">
                Ver {product.title}
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Flechas */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + products.length) % products.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % products.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70"
      >
        ›
      </button>
    </div>
  );
};

export default CarouselDemo;
