"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import * as React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { IconButton } from "@material-tailwind/react";
import { NavArrowRight, NavArrowLeft } from "iconoir-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

function CustomNavigation({
  swiperRef,
}: {
  swiperRef: React.RefObject<SwiperType>;
}) {
  return (
    <>
      <IconButton
        isCircular
        size="lg"
        variant="ghost"
        color="secondary"
        onClick={() => swiperRef.current?.slidePrev()}
        className="dark !absolute left-2 top-1/2 z-10 -translate-y-1/2"
      >
        <NavArrowLeft className="h-7 w-7 -translate-x-0.5 stroke-2" />
      </IconButton>
      <IconButton
        isCircular
        size="lg"
        variant="ghost"
        color="secondary"
        onClick={() => swiperRef.current?.slideNext()}
        className="dark !absolute right-2 top-1/2 z-10 -translate-y-1/2"
      >
        <NavArrowRight className="h-7 w-7 translate-x-px stroke-2" />
      </IconButton>
    </>
  );
}

const customPagination = (_: unknown, className: string) =>
  `<span class="${className} w-4 h-4 [&.swiper-pagination-bullet-active]:!opacity-100 [&.swiper-pagination-bullet-active]:[background:rgb(var(--color-background))] !opacity-50 ![background:rgb(var(--color-background))]"></span>`;

export default function CarouselDemo() {
  const swiperRef = React.useRef<SwiperType | null>(null);

  return (
    <div className="max-w-[1920px]">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{
          enabled: true,
          clickable: true,
          dynamicBullets: true,
          renderBullet: customPagination,
        }}
        modules={[Navigation, Pagination]}
        className="relative rounded-lg [&_div.swiper-button-next]:text-background [&_div.swiper-button-prev]:text-background"
      >
        {[
          "/images/hero3.jpg",
          "https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?w=1600&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?w=1600&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=1600&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&auto=format&fit=crop&q=80",
        ].map((img, index) => (
          <SwiperSlide key={index} className="select-none">
            <img
              src={img}
              alt={`image-${index}`}
              className="h-[28rem] w-full object-cover"
            />
          </SwiperSlide>
        ))}
        <CustomNavigation swiperRef={swiperRef} />
      </Swiper>
    </div>
  );
}
