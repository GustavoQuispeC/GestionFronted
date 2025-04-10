"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const ComplexNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <header className="flex border-b border-blue-950 px-4 sm:px-10 bg-blue-950 h-[60px] tracking-wide relative z-50 shadow-md">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto gap-4">
        {/* Logos */}
        <div className="flex items-center mb-3.5">
          <a href="#" className="hidden sm:block">
            <img
              src="/images/LogoFamet.png"
              alt="logo"
              className="w-72 h-16 object-contain"
            />
          </a>
          <a href="#" className="sm:hidden">
            <img
              src="/images/LogoFamet2.png"
              alt="logo"
              className="w-28 h-14 object-contain"
            />
          </a>
        </div>

        {/* Menu */}
        <div
          id="collapseMenu"
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out max-lg:fixed max-lg:bg-white max-lg:w-1/3 max-lg:min-w-[250px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 lg:!block lg:static lg:translate-x-0`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
          >
            ✕
          </button>

          <ul className="lg:flex lg:gap-x-5">
            <li className="mb-4 hidden max-lg:block">
              <a href="#">
                <img
                  src="/images/LogoFamet2.png"
                  alt="logo"
                  className="w-24 h-10 object-contain"
                />
              </a>
            </li>
            {["Home", "Team", "Feature", "Blog", "About"].map((item) => (
              <li key={item} className="max-lg:border-b max-lg:py-1">
                <a
                  href="#"
                  className={`font-semibold block text-[15px] ${
                    item === "Home" ? "text-blue-500" : "text-gray-400"
                  } lg:hover:text-blue-400 transition-colors`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Buscador y acciones */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Icono de búsqueda y campo condicional */}
          {showSearchInput ? (
            <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full border focus-within:border-slate-900 transition-all">
              <MagnifyingGlassIcon className="h-4 w-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Buscar..."
                className="text-sm bg-transparent outline-none w-full"
                autoFocus
                onBlur={() => setShowSearchInput(false)}
              />
            </div>
          ) : (
            <button
              className="text-white block sm:hidden"
              onClick={() => setShowSearchInput(true)}
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          )}

          {/* Mostrar siempre en pantallas grandes */}
          <div className="hidden sm:flex items-center bg-gray-100 px-3 py-1.5 rounded-full border focus-within:border-slate-900 transition-all">
            <MagnifyingGlassIcon className="h-4 w-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Buscar..."
              className="text-sm bg-transparent outline-none w-full"
            />
          </div>
          <Button className="bg-blue-500 py-1.5 px-4 text-sm">
            Iniciar sesión
          </Button>

          {/* Botón menú responsive */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default ComplexNavbar;
