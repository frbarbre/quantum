import { products } from "../data";
import Link from "next/link";
import Button from "./Button";

export default function Hero() {
  const pc = products[3];

  return (
    <div className="w-full relative h-full bg-black">
      <img
        src={"/home/hero.png"}
        alt="HeroImage"
        className="w-full h-[729px] object-cover object-center"
      />
      <div className="absolute inset-0 max-w-[1174px] mx-auto flex items-center object-center px-[39px] lg:px-8 lg:pt-[89px] bg-black/50 lg:bg-black/20">
        <article className="w-full text-center lg:text-left">
          <h2 className="tracking-[10px] uppercase text-white text-[14px] pb-[16px] md:pb-[24px] opacity-50">
            New product
          </h2>
          <h1 className="font-bold text-white text-[36px] uppercase max-w-[328px] md:max-w-[396px] lg:max-w-[396px] md:text-[56px] lg:text-[56px] mx-auto lg:mx-0 pb-[24px]">
            {pc.name}
          </h1>
          <p className="max-w-[389px] mx-auto lg:mx-0 font-medium text-[15px] leading-[25px] text-white opacity-75 pb-[24px] md:pb-[40px]">
            {pc.description}
          </p>
          <Link
            href={`/headphones/${pc.slug}`}
            className="w-max mx-auto lg:mx-0 block"
          >
            <Button
              color={"bg-grad hover:bg-grad-pale text-white"}
              text={"See product"}
            />
          </Link>
        </article>
      </div>
    </div>
  );
}
