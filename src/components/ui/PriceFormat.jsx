import { twMerge } from "tailwind-merge";


const PriceFormat = ({ priceData,className }) => {
  const priceFormat = new Number(priceData).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return <div>
              <p className={twMerge("text-[30px] font-sans font-semibold",className ? className :"" )}>{priceFormat}</p>
        </div>;
};

export default PriceFormat;
