"use client"
import { twMerge } from "tailwind-merge";

const PriceFormat = ({ priceData, className }) => {
  // Ensure priceData is a valid number and format it
  const priceFormat = Number(priceData).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <span className={twMerge("text-[30px] font-sans font-semibold", className ? className : "")}>
      {priceFormat}
    </span>
  );
};

export default PriceFormat;
