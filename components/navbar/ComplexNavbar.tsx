
'use client'
import React, { useState } from "react";


const ComplexNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex border-b border-gray-300 py-3 px-4 sm:px-10 bg-white min-h-[65px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center gap-4 max-w-screen-xl mx-auto w-full">
        <a href="#" className="max-sm:hidden">
          <img
            src="/images/LogoFamet.png"
            alt="logo"
            className="w-[134px]"
          />
        </a>
        <a href="#" className="hidden max-sm:block">
          <img
            src="/images/LogoFamet.png"
            alt="logo"
            className="w-32"
          />
        </a>

        {/* Menu */}
        <div
          id="collapseMenu"
          className={`${
            isMenuOpen ? "block" : "max-lg:hidden"
          } max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50 lg:!block`}
        >
          <button
            id="toggleClose"
            onClick={() => setIsMenuOpen(false)}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
          >
            ✕
          </button>

          <ul className="lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="#">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </a>
            </li>
            {["Home", "Team", "Feature", "Blog", "About"].map((item) => (
              <li key={item} className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="#"
                  className={`font-medium block text-[15px] ${
                    item === "Home" ? "text-blue-700" : "text-slate-900"
                  } lg:hover:text-blue-700`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Search & Toggle */}
        <div className="flex gap-4 ml-auto">
          <div className="flex max-w-xs w-full bg-gray-100 px-4 py-2.5 outline outline-transparent border focus-within:border-slate-900 focus-within:bg-transparent transition-all">
            <input
              type="text"
              placeholder="Search something..."
              className="w-full text-sm bg-transparent outline-none pr-2"
            />
          </div>

          {/* Botón de menú */}
          <button
            id="toggleOpen"
            className="lg:hidden"
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
