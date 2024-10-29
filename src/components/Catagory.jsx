
import Image from 'next/image';
import { GetData } from '../lib/GetData';
const Catagory = async() => {
    // beuty area start
   const Beuty =  "/api/catagory/beauty"
   const beutyData = await GetData(Beuty)

   //Fragrances area start 
   const Fragrances = "/api/catagory/fragrances"
   const FragrancesData = await GetData(Fragrances)

  //furniture area start
  const furniture = "/api/catagory/furniture"
  const furnitureData = await GetData(furniture)

  // groceries  area start
  const groceries = "/api/catagory/groceries"
  const groceriesData = await GetData(groceries)

  return (
    <div>
        <div className="content mx-20 mt-10">
           <div className="item grid grid-cols-5 ">
                <div className="items flex justify-center items-center flex-col gap-2 cursor-pointer  ">
                    <div className="image flex overflow-hidden  bg-[#e2f1ff] rounded-full h-[180px] w-[180px]">
                       <Image className=" h-full w-full hover:scale-110 duration-300" src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png" height={150} width={150} alt="category" />
                    </div>
                    <div className="text text-center">
                        <p className="text-[20px] font-bold hover:text-prymary duration-300">Beuty</p>
                         <p className=" font-semibold">{beutyData?.length} products</p>
                    </div>
                </div>
                <div className="items flex justify-center items-center flex-col gap-2 cursor-pointer  ">
                    <div className="image flex overflow-hidden  bg-[#e2f1ff] rounded-full h-[180px] w-[180px]">
                       <Image className=" h-full w-full hover:scale-110 duration-300 object-contain" src="https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png" height={150} width={150} alt="category" />
                    </div>
                    <div className="text text-center">
                        <p className="text-[20px] font-bold hover:text-prymary duration-300">Fragrances</p>
                         <p className=" font-semibold">{FragrancesData?.length} products</p>
                    </div>
                </div>
                <div className="items flex justify-center items-center flex-col gap-2 cursor-pointer  ">
                    <div className="image flex overflow-hidden  bg-[#e2f1ff] rounded-full h-[180px] w-[180px]">
                       <Image className=" h-full w-full hover:scale-110 duration-300" src="https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png" height={150} width={150} alt="category" />
                    </div>
                    <div className="text text-center">
                        <p className="text-[20px] font-bold hover:text-prymary duration-300">furniture</p>
                         <p className=" font-semibold">{furnitureData?.length} products</p>
                    </div>
                </div>
                <div className="items flex justify-center items-center flex-col gap-2 cursor-pointer  ">
                    <div className="image flex overflow-hidden  bg-[#e2f1ff] rounded-full h-[180px] w-[180px]">
                       <Image className=" h-full w-full hover:scale-110 duration-300" src="https://cdn.dummyjson.com/products/images/groceries/Apple/1.png" height={150} width={150} alt="category" />
                    </div>
                    <div className="text text-center">
                        <p className="text-[20px] font-bold hover:text-prymary duration-300">groceries</p>
                         <p className=" font-semibold">{groceriesData?.length} products</p>
                    </div>
                </div>
                <div className="items flex justify-center items-center flex-col gap-2 cursor-pointer  ">
                    <div className="image flex overflow-hidden  bg-[#e2f1ff] rounded-full h-[180px] w-[180px]">
                       <Image className=" h-full w-full hover:scale-110 duration-300" src="https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png" height={150} width={150} alt="category" />
                    </div>
                    <div className="text text-center">
                        <p className="text-[20px] font-bold hover:text-prymary duration-300">Processing</p>
                         <p className=" font-semibold">0 products</p>
                    </div>
                </div>
           </div>
        </div>
    </div>
  );
};

export default Catagory;
