import React from "react";
import Store from "./Store";
import Link from "next/link";
import { cashbackCompanies } from "@/data/images";
import { FcCalendar } from "react-icons/fc";
import { BsCalendarHeart } from "react-icons/bs";
import ShopAd from "./ShopAd";

const CashbackStore = () => {
    return (
        <div className="min-h-fit w-full">
            <div className="w-[80%] mx-auto py-20 overflow-hidden">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-2xl font-bold font-serif tracking-wider">
                        Cash Back at Stores We Love
                    </h1>
                    <Link
                        href="#"
                        className="text-sm text-neutral-200 hover:underline"
                    >
                        See All Stores
                    </Link>
                </div>

                <div className="mt-10 flex flex-row items-center gap-12">
                    {cashbackCompanies.map((company) => (
                        <Store key={company.id} store={company} />
                    ))}
                </div>

                <div className="w-full h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-md my-16 box-shadow flex justify-center items-center animate-shake relative cursor-pointer">
                    <h1 className="text-2xl md:text-5xl font-black tracking-tight uppercase">
                        <span className="text-white">
                            What to buy on octobot
                        </span>
                    </h1>

                    <FcCalendar
                        size={50}
                        className="absolute top-5 left-25 rotate-45"
                    />

                    <BsCalendarHeart
                        size={50}
                        className="absolute top-5 right-25 -rotate-45"
                    />
                </div>

                <div className="grid grid-cols-12 gap-4">
                    <ShopAd />
                    <ShopAd />
                    <ShopAd />
                </div>
            </div>
        </div>
    );
};

export default CashbackStore;
