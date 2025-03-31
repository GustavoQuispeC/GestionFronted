'use client";';
import { ComplexNavbar, Footer, HeroWithCarousel, Products } from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <ComplexNavbar />
      <HeroWithCarousel />
      <Products />

      <Footer />
    </>
  );
};

export default page;
