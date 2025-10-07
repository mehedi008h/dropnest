"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-nowrap">
            {/* Center - Glass Navigation Container */}

            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-3 flex items-center justify-between gap-8">
                {/* Logo */}

                <div className="hidden md:flex space-x-6">
                    <Link
                        href="#features"
                        className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
                    >
                        Features
                    </Link>
                    <Link
                        href="#pricing"
                        className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="#contact"
                        className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    );
}
