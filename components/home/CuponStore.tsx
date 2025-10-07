import Image from "next/image";
import React from "react";

const CuponStore = () => {
    return (
        <div className="col-span-3 min-h-60 bg-slate-300/10 rounded-md">
            {/* image  */}
            <div className="w-full h-40 bg-neutral-300 rounded-t-md relative flex justify-center items-center">
                <div className="bg-amber-500 px-3 py-2 rounded-full absolute top-3 left-3 text-xs font-semibold uppercase text-white backdrop-blur-sm">
                    10% OFF
                </div>

                <Image
                    src="/images/uber-eats.jpg"
                    alt="electronics"
                    width={100}
                    height={100}
                    className="object-contain rounded-md box-shadow"
                />
            </div>

            {/* info  */}
            <div className="p-3">
                <h1 className="font-semibold text-lg tracking-wider font-serif">
                    Electronics
                </h1>
                <p className="text-sm text-gray-300 mt-2 tracking-wide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, error.
                </p>

                <div className="mt-5 h-10 rounded-md w-full border-dashed border border-neutral-400 flex flex-row justify-between items-center">
                    <h1 className="w-[50%] text-center text-sm font-medium text-amber-300 leading-10">
                        4f6gg0
                    </h1>
                    <button className="w-[50%] h-full rounded-r-md bg-gradient-to-r from-blue-400 to-cyan-400  text-white font-semibold hover:opacity-90 transition-all duration-300 cursor-pointer">
                        Get Deal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CuponStore;
