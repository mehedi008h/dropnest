"use client";
import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button after scrolling down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll smoothly to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-3 rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition-all duration-300 z-50"
                >
                    <BsArrowUp className="w-6 h-6" />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
