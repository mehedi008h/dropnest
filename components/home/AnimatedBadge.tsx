"use client";
import React, { useEffect, useState } from "react";

const messages = [
    "Personalize offer just for you",
    "Exclusive deals every week",
    "Unlock premium features today",
    "Special discounts available now",
];

const AnimatedBadge = () => {
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true); // trigger animation
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % messages.length);
                setAnimate(false); // reset animation
            }, 300); // duration of exit animation
        }, 3000); // change text every 3s

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="backdrop-blur-md bg-white/10 rounded-full px-5 py-2 border-dashed border-white/20 border-2 shadow-2xl overflow-hidden transition-all duration-300">
            <p
                className={`text-xs font-semibold uppercase text-neutral-200 transition-all duration-300 ${
                    animate
                        ? "translate-y-full opacity-0"
                        : "translate-y-0 opacity-100"
                }`}
            >
                {messages[index]}
            </p>
        </div>
    );
};

export default AnimatedBadge;
