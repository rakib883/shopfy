"use client";
import React, { useEffect, useState } from 'react';
import { GetData } from '../../lib/GetData';
import Card from '../ui/Card';
import Title from '../ui/Title';

const Eletronic = () => {
    const [allCatagoryProduct, setCatagory] = useState([]);

    useEffect(() => {
        const allCatagoryData = async () => {
            try {
                const response = "http://localhost:3000/api/product";
                const result = await GetData(response);
                setCatagory(result);
            } catch (error) {
                console.log(error);
            }
        };
        allCatagoryData();
    }, []);

    const catagoryHandeler = async (catagory) => {
        try {
            const response = `http://localhost:3000/api/catagory/${catagory}`;
            const result = await GetData(response);
            setCatagory(result);
        } catch (error) {
            console.log(error); // Fixed typo here
        }
    };

    console.log("catagory data", allCatagoryProduct);

    const catagery = [
        { id: 1, name: "beauty" },
        { id: 2, name: "fragrances" },
        { id: 3, name: "furniture" },
        { id: 4, name: "groceries" },
    ];

    return (
        <div>
            <div className="allcontent mx-20">
                <div className="content flex gap-10 justify-between ">
                    <div className="menu w-[30%] ">
                        <div className="content border-2 border-[#ff3494] rounded-lg sticky top-[130px]">
                            <div className="content p-8">
                                <div className="title">
                                    <Title className="text-[20px] border-b-2 max-w-[200px] border-[#0989ff]" title="Catagory" />
                                </div>
                                <div className="catagory mt-4 flex flex-col gap-2 mx-4">
                                    {
                                        catagery.map((item) =>
                                            <ul key={item?.id}>
                                                <li className="main list-disc cursor-pointer hover:text-[#0989ff] duration-300">
                                                    <p onClick={() => catagoryHandeler(item?.name)} className="first-letter:uppercase">{item?.name}</p>
                                                </li>
                                            </ul>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product w-[70%]">
                        <div className="product grid grid-cols-3 gap-4">
                            {
                                allCatagoryProduct?.length > 0 ? ( // Check if there are products
                                    allCatagoryProduct.map((item) =>
                                        <Card key={item?.id} item={item} />
                                    )
                                ) : (
                                    <p>No products available</p> // Display message if no products
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eletronic;
