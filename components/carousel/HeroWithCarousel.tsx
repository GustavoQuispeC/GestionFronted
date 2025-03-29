"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  { src: "/images/hero1.jpg", alt: "Hero Image 1" },
  { src: "/images/hero2.jpg", alt: "Hero Image 2" },
  { src: "/images/hero3.jpg", alt: "Hero Image 3" },
];

export default function HeroWithCarousel() {
  return (
    <section className="relative w-full h-[500px] bg-gray-800 flex justify-center items-center">
      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="w-full max-w-[1920px]"
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[500px]">
            <Image
              alt={image.alt}
              src={image.src}
              width={1920}
              height={500}
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Carousel>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl font-bold">Bienvenido a nuestra tienda</h1>
        <p className="mt-2 text-lg">Descubre lo mejor en nuestros productos</p>
      </div>
    </section>
  );
}
