import CuponStore from "@/components/home/CuponStore";
import React from "react";

const StoresPage = () => {
    return (
        <div className="w-full grid grid-cols-12 gap-6 my-10">
            <CuponStore />
            <CuponStore />
            <CuponStore />
            <CuponStore />
            <CuponStore />
            <CuponStore />
            <CuponStore />
        </div>
    );
};

export default StoresPage;
