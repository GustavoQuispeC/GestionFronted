'use client";';
import {
  ComplexNavbar,
  Footer,
  HeroWithCarousel,
  Products,
} from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <ComplexNavbar />
      <div className="pt-1"></div>
      <HeroWithCarousel />
      <div className="flex flex-wrap justify-center my-16 gap-12">
        <a href="/herramientas" className="text-center">
          <div className="group transition-transform duration-300 hover:scale-105">
            <div className="overflow-hidden rounded-full w-72 h-72">
              <img
                src="/images/herramientas.jpg"
                alt="Herramientas"
                className="h-72 w-72 object-cover object-center rounded-full"
              />
            </div>
          </div>
          <span className="mt-4 block text-xl font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-600">
            Herramientas
          </span>
        </a>

        <a href="/alumbrado" className="text-center">
          <div className="group transition-transform duration-300 hover:scale-105">
            <div className="overflow-hidden rounded-full w-72 h-72">
              <img
                src="/images/alumbrado.jpg"
                alt="Alumbrado"
                className="h-72 w-72 object-cover object-center rounded-full"
              />
            </div>
          </div>
          <span className="mt-4 block text-xl font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-600">
            Alumbrado
          </span>
        </a>

        <a href="/fierros" className="text-center">
          <div className="group transition-transform duration-300 hover:scale-105">
            <div className="overflow-hidden rounded-full w-72 h-72">
              <img
                src="/images/fierros.jpg"
                alt="Fierros"
                className="h-72 w-72 object-cover object-center rounded-full"
              />
            </div>
          </div>
          <span className="mt-4 block text-xl font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-600">
            Fierros
          </span>
        </a>

        <a href="/ladrillos" className="text-center">
          <div className="group transition-transform duration-300 hover:scale-105">
            <div className="overflow-hidden rounded-full w-72 h-72">
              <img
                src="/images/ladrillos.jpg"
                alt="Ladrillos"
                className="h-72 w-72 object-cover object-center rounded-full"
              />
            </div>
          </div>
          <span className="mt-4 block text-xl font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-600">
            Ladrillos
          </span>
        </a>
      </div>

      <Products />

      <Footer />
    </>
  );
};

export default page;
