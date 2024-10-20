"use client";
import { React, useEffect, useRef, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { GetData } from '../lib/GetData';
import Link from 'next/link';

const HeaderInput = () => {
  // State for input text and products
  const [inputText, setInputText] = useState("");
  const [allProduct, setAllProduct] = useState([]);
  const [filterItem, setFilterItem] = useState([]);
  const [isopen, setIsopen] = useState(false);
  const handelerReferance = useRef(null);

  // Fetch all product data
  useEffect(() => {
    const filterData = async () => {
      try {
        const allProduct = await GetData("http://localhost:3000/api/product");
        setAllProduct(allProduct);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    filterData();
  }, []);

  // Filter products based on input
  useEffect(() => {
    const filtered = allProduct.filter((item) =>
      item?.title.toLowerCase().includes(inputText.toLowerCase())
    );
    setFilterItem(filtered);
  }, [allProduct, inputText]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (handelerReferance.current && !handelerReferance.current.contains(e.target)) {
        setIsopen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="main">
      <div className="content" ref={handelerReferance}>
        <div className="input-area relative mx-[100px] flex justify-between items-center border-2 border-[#0989ff]">
          <div className="flex-1 border-r-2">
            <input
              onFocus={() => setIsopen(true)}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              type="text"
              className="border-none outline-none focus:ring-0 focus:border-none"
              placeholder="Search product ...."
            />
          </div>
          <div className="button">
            <div className="item px-2">
              <select className="border-none outline-none focus:ring-0 focus:border-none">
                <option value="">Categories</option>
                <option value="">Bangladesh</option>
                <option value="">Dhaka</option>
                <option value="">Kolkata</option>
              </select>
            </div>
          </div>
          <div className="button w-[12%] bg-[#0989ff] cursor-pointer flex justify-center items-center text-center py-1.5">
            <div className="button">
              <CiSearch className="text-white text-3xl" />
            </div>
          </div>
          {/* Search dropdown */}
          {isopen && (
            <div className="main absolute top-12 w-full">
              <div className="main-content bg-white shadow-xl h-auto max-h-96 overflow-y-scroll">
                <div className="item m-4 flex flex-col gap-2">
                  {filterItem.map((item) => (
                    <Link
                      href={{
                        pathname: `/single-product/${item?.id}`,
                        query: { id: item?.id },
                      }}
                      key={item?.id}
                      passHref
                    >
                      <div
                        onClick={() => setIsopen(false)}
                        className="hover:bg-gray-300 px-2 cursor-pointer flex items-center gap-2"
                      >
                        <CiSearch className="text-xl" />
                        <div className="main">
                          <p>{item?.title}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderInput;
