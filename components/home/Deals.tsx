import Link from "next/link";
import React from "react";
import CuponStore from "./CuponStore";

const Deals = () => {
    return (
        <div className="w-[80%] mx-auto py-10 overflow-hidden">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-2xl font-bold font-serif tracking-wider">
                    Top Deals
                </h1>
                <Link
                    href="#"
                    className="text-sm text-neutral-200 hover:underline"
                >
                    See All Deal
                </Link>
            </div>

            <div className="grid grid-cols-12 gap-6 mt-10">
                <CuponStore />
                <CuponStore />
                <CuponStore />
                <CuponStore />
                <CuponStore />
                <CuponStore />
                <CuponStore />
                <CuponStore />
            </div>
        </div>
    );
};

export default Deals;
