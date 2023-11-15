import { nanoid } from "nanoid";

export default function Features({ productArray }) {
  return (
    <div className="py-[88px] md:pt-[120px] md:pb-[153px] lg:py-[160px] flex flex-col lg:flex-row gap-[88px] md:gap-[120px] lg:gap-[125px] w-full">
      <div className="flex flex-col flex-1 max-w-[689px]">
        <h2 className="text-[24px] leading-[36px] tracking-[0.86px] font-bold pb-[24px] uppercase md:pb-[32px] md:text-[32px] md:tracking-[1.14px] md:flex-1 lg:flex-none">
          Components
        </h2>
        <ul className="md:flex-1 lg:flex-none gap-[8px] flex flex-col">
          {productArray?.components?.map((item) => (
            <li key={nanoid()} className="flex justify-between items-end gap-[12px]">
              <div className="flex gap-[18px] items-center">
                <img src={item.icon} alt="" className="w-[18px] max-h-[18px] object-contain" />
                <p className="font-semibold text-[15px] leading-[25px]">
                  <span className="opacity-50">{item.component}</span>
                  <br />
                  {item.details}
                </p>
              </div>
              <p className="font-bold">{item.price}$</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <h2 className="text-[24px] leading-[36px] tracking-[0.86px] font-bold pb-[24px] uppercase md:pb-[32px] md:text-[32px] md:tracking-[1.14px]">
          Features
        </h2>
        <p className="text-[15px] opacity-50 leading-[25px] font-medium max-w-[689px] lg:max-w-[635px]">
          {productArray.features}
        </p>
      </div>
    </div>
  );
}
