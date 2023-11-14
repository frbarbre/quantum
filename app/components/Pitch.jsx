"use client";

import { usePathname } from "next/navigation";

export default function Pitch() {
  const pathName = usePathname();

  return (
    <div
      className={`${
        pathName === "/"
          ? "py-[120px] md:py-[96px] lg:py-[200px]"
          : "pb-[120px] md:pb-[120px] lg:pb-[160px] pt-[60px] lg:pt-[100px]"
      } w-full flex flex-col md:flex-row-reverse items-center gap-[40px] md:gap-[63px] lg:gap-[125px]`}
    >
      <div className="w-full">
        <img
          className="rounded-[8px] h-[250px] md:h-[350px] w-full object-cover"
          src="/shared/promo.png"
          alt="promo"
        />
      </div>
      <div className="w-full text-center md:text-left">
        <h2 className="font-bold uppercase text-[28px] tracking-[1px] md:text-[40px] md:tracking-[1.43px] md:leading-[44px]">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h2>
        <p className="font-medium opacity-50 text-[15px] leading-[25px] pt-[32px] max-w-[573px] mx-auto lg:mx-0">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
