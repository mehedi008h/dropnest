"use client";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import { FaHotjar } from "react-icons/fa";

interface Store {
    id: number;
    name: string;
    logo: StaticImageData;
    cashback: string;
}

interface StoreProps {
    store: Store;
}

const Store: FC<StoreProps> = ({ store }) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="h-24 w-24">
                <Image
                    src={store.logo}
                    width={100}
                    height={100}
                    alt={store.name}
                    className="rounded-lg hover:scale-110 transition-all duration-300 object-contain h-full w-full"
                />
            </div>
            <span className="flex flex-row items-center gap-2 mt-2">
                <FaHotjar color="orange" />
                <p className="font-semibold text-base font-serif tracking-wide">
                    {store.cashback}
                </p>
            </span>
        </div>
    );
};

export default Store;
