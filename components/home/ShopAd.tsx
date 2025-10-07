import Image from "next/image";
import React from "react";

const ShopAd = () => {
    return (
        <div className="col-span-4 bg-white/5 backdrop-blur-md h-56 rounded-md flex animate-price">
            <div className="w-[50%] h-full flex flex-col justify-center items-center p-4">
                <h3 className="text-xl text-white font-serif font-semibold tracking-wide">
                    Drop Nest
                </h3>
                <p className="text-2xl md:text-5xl font-bold tracking-wider my-4 text-amber-300">
                    50%
                </p>
                <button className="text-sm rounded-md mt-4  uppercase cursor-pointer bg-green-500 text-white hover:bg-green-600 font-semibold px-4 py-2 transition-all duration-300 box-price">
                    Shop Now
                </button>
            </div>
            <div className="w-[50%] h-full bg-amber-300 rounded-r-md flex justify-center items-center ">
                <Image
                    src={"/images/petsmart.jpg"}
                    height={100}
                    width={100}
                    alt="Image"
                    className="box-shadow"
                />
            </div>
        </div>
    );
};

export default ShopAd;
