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
      <Products />

      <Footer />
    </>
  );
};

export default page;
