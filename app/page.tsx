import { ComplexNavbar, Footer, HeroWithCarousel } from "@/components";

import React from "react";

const page = () => {
  return (
    <>
      <ComplexNavbar />
      <HeroWithCarousel />
      <h1>Productos destacados</h1>
      <Footer />
    </>
  );
};

export default page;
