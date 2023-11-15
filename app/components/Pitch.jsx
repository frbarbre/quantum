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
          Bringing you the <span className="text-primary">best</span> PC solutions
        </h2>
        <p className="font-medium opacity-50 text-[15px] leading-[25px] pt-[32px] max-w-[573px] mx-auto lg:mx-0">
          Based in the cultural hub of Aarhus, Quantum brings innovative PC
          solutions to Denmark. Explore our comprehensive showroom and
          experience firsthand our range of cutting-edge technology. Visit us in
          Aarhus and meet our passionate team committed to making Quantum your
          prime destination for top-tier computing experiences.
        </p>
      </div>
    </div>
  );
}
