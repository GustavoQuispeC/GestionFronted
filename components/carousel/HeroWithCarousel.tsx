// "use client";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import * as React from "react";
// import { Navigation, Pagination } from "swiper/modules";
// import { IconButton } from "@material-tailwind/react";
// import { NavArrowRight, NavArrowLeft } from "iconoir-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper as SwiperType } from "swiper";

// function CustomNavigation({
//   swiperRef,
// }: {
//   swiperRef: React.RefObject<SwiperType>;
// }) {
//   return (
//     <>
//       <IconButton
//         isCircular
//         size="lg"
//         variant="ghost"
//         color="secondary"
//         onClick={() => swiperRef.current?.slidePrev()}
//         className="dark !absolute left-2 top-1/2 z-10 -translate-y-1/2"
//       >
//         <NavArrowLeft className="h-7 w-7 -translate-x-0.5 stroke-2" />
//       </IconButton>
//       <IconButton
//         isCircular
//         size="lg"
//         variant="ghost"
//         color="secondary"
//         onClick={() => swiperRef.current?.slideNext()}
//         className="dark !absolute right-2 top-1/2 z-10 -translate-y-1/2"
//       >
//         <NavArrowRight className="h-7 w-7 translate-x-px stroke-2" />
//       </IconButton>
//     </>
//   );
// }

// const customPagination = (_: unknown, className: string) =>
//   `<span class="${className} w-4 h-4 [&.swiper-pagination-bullet-active]:!opacity-100 [&.swiper-pagination-bullet-active]:[background:rgb(var(--color-background))] !opacity-50 ![background:rgb(var(--color-background))]"></span>`;

// export default function CarouselDemo() {
//   const swiperRef = React.useRef<SwiperType | null>(null);

//   return (
//     <div className="max-w-[1920px]">
//       <Swiper
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         pagination={{
//           enabled: true,
//           clickable: true,
//           dynamicBullets: true,
//           renderBullet: customPagination,
//         }}
//         modules={[Navigation, Pagination]}
//         className="relative rounded-lg [&_div.swiper-button-next]:text-background [&_div.swiper-button-prev]:text-background"
//       >
//         {[
//           "/images/hero3.jpg",
//           "https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?w=1600&auto=format&fit=crop&q=80",
//           "https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?w=1600&auto=format&fit=crop&q=80",
//           "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=1600&auto=format&fit=crop&q=80",
//           "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&auto=format&fit=crop&q=80",
//         ].map((img, index) => (
//           <SwiperSlide key={index} className="select-none">
//             <img
//               src={img}
//               alt={`image-${index}`}
//               className="h-[28rem] w-full object-cover"
//             />
//           </SwiperSlide>
//         ))}
//         <CustomNavigation swiperRef={swiperRef} />
//       </Swiper>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    title: "Zapatillas deportivas",
    image: "/images/producto1.jpg",
    link: "/producto/1",
  },
  {
    id: 2,
    title: "Mochila de viaje",
    image: "/images/producto2.jpg",
    link: "/producto/2",
  },
  {
    id: 3,
    title: "Auriculares inalámbricos",
    image: "/images/producto3.jpg",
    link: "/producto/3",
  },
];

const CarouselDemo = () => {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrent(index);

  return (
    <div className="relative w-full max-w-[1366px] overflow-hidden mx-auto rounded-xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-full relative h-[300px] sm:h-[400px] md:h-[500px] bg-black"
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
