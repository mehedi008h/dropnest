"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoPlay } from "react-icons/go";
import CompanyLogoSlider from "./CompanyLogoSlider";
import AnimatedBadge from "./AnimatedBadge";

const Hero = () => {
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setTextVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="h-screen w-full  flex flex-col justify-end items-center">
            {/* offers notificatio  */}
            <AnimatedBadge />

            {/* Hero Text Content */}
            <div className="text-center z-10 px-6 mb-10">
                <div
                    className={`transition-all duration-1000 ${
                        textVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tight">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                            Discount
                        </span>
                        <br />
                        <span className="text-white">Without Limits</span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Every coupon is scanned and updated with care by our
                        advanced AI. We remove expired codes, fake links, and
                        shady offers – so you always get working promos 💯
                    </p>

                    {/* button  */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                        <Link href="/dashboard">
                            <button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300">
                                Get Discount
                            </button>
                        </Link>
                        <button className="bg-white/10 backdrop-blur-md hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2">
                            <GoPlay size={20} /> Watch Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Company Logo Slider */}
            <CompanyLogoSlider />
        </div>
    );
};

export default Hero;
