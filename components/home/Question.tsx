"use client";
import React, { useState } from "react";

interface QuestionProps {
    question: string;
    answer: string;
}

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`w-full mt-6 border-b pb-5  ${
                isOpen ? "border-teal-600" : "border-neutral-600"
            }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between text-left"
            >
                <h2 className="text-base font-semibold font-serif text-neutral-200 tracking-wider">
                    {question}
                </h2>

                {/* Toggle Icon */}
                <span
                    className={`transition-transform duration-300 text-3xl font-bold ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                >
                    {isOpen ? "−" : "+"}
                </span>
            </button>

            {/* Answer Section with Smooth Expand */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 mt-3" : "max-h-0"
                }`}
            >
                <p className="text-neutral-300 tracking-wide">{answer}</p>
            </div>
        </div>
    );
};

export default Question;
