import CuponStore from "@/components/home/CuponStore";
import React from "react";
import { BiSearch } from "react-icons/bi";

const StoresPage = () => {
    return (
        <div className="min-h-screen pt-28">
            <div className="w-[80%] mx-auto flex items-center flex-col">
                <div className="h-10 w-[50%] bg-white/5 border rounded-full border-neutral-400 flex flex-row items-center gap-2 px-4">
                    <BiSearch size={22} />
                    <input
                        type="text"
                        placeholder="Search store"
                        className="bg-transparent w-full rounded-full outline-none"
                    />
                </div>
                <div className="w-full grid grid-cols-12 gap-6 my-10">
                    <CuponStore />
                    <CuponStore />
                    <CuponStore />
                    <CuponStore />
                    <CuponStore />
                    <CuponStore />
                    <CuponStore />
                </div>
            </div>
        </div>
    );
};

export default StoresPage;
