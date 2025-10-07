"use client";

import React from "react";
import Link from "next/link";
import { BiHeart, BiSearch } from "react-icons/bi";

export default function Header() {
    return (
        <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-nowrap">
            {/* Center - Glass Navigation Container */}

            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-3 flex items-center justify-between gap-16">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-orange-500 font-serif uppercase animate-pulse"
                >
                    DN
                </Link>

                <div className="hidden md:flex space-x-6">
                    <Link
                        href="/cupons"
                        className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
                    >
                        Cupons
                    </Link>
                    <Link
                        href="/deals"
                        className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
                    >
                        Deals
                    </Link>
                    <Link
                        href="/stores"
                        className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
                    >
                        Stores
                    </Link>
                    <Link
                        href="#contact"
                        className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
                    >
                        About Us
                    </Link>
                </div>

                <div className="h-10 w-10 flex items-center justify-center bg-white/5 border-2 border-amber-500 rounded-full cursor-pointer hover:bg-white/10 transition-all duration-300">
                    <BiHeart
                        size={22}
                        className="text-amber-500 cursor-pointer"
                    />
                </div>
            </div>
        </header>
    );
}
