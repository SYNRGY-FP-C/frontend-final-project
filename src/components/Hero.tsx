import Button from "@/components/buttons/Button";
import React from "react";

export default function Hero({ scroll }) {
  const scrollToElement = () =>
    scroll.current.scrollIntoView({ behavior: "smooth" });
  return (
    <div className="flex relative items-start justify-center bg-cover bg-center w-full min-h-screen bg-[url('/images/hero.png')] mx-auto">
      <div className="flex flex-col items-center px-4 mt-48 text-center gap-y-6">
        <h1 className="max-w-2xl text-4xl lg:text-5xl lg:leading-normal text-base-1 typo-headline-1">
          Sewa Kost Makin Mudah Dengan KostHub!
        </h1>
        <p className="typo-body-regular text-[#454848]">
          Platform pencarian kost terpercaya dengan pilihan tanpa batas!
        </p>
        <div className="block w-48">
          <Button onClick={scrollToElement}>Coba sekarang</Button>
        </div>
      </div>
    </div>
  );
}
