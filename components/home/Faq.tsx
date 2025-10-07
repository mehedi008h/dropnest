import React from "react";
import Question from "./Question";

const Faq = () => {
    return (
        <div className="min-h-fit w-full">
            <div className="w-[80%] mx-auto py-20">
                <h1 className="text-2xl font-bold font-serif">
                    Frequently Asked Questions
                </h1>

                <Question
                    question="How can RetailMeNot save me money when shopping online?"
                    answer="RetailMeNot offers several ways for shoppers to save while shopping. We feature up-to-date coupon codes, free shipping offers, sales and promo codes for thousands of stores and restaurants. Plus, our cash back offers pay you to shop! Activate a cash back offer, shop, check out, and we'll pay you back a percentage of what you spent."
                />

                <Question
                    question="How can RetailMeNot save me money when shopping online?"
                    answer="RetailMeNot offers several ways for shoppers to save while shopping. We feature up-to-date coupon codes, free shipping offers, sales and promo codes for thousands of stores and restaurants. Plus, our cash back offers pay you to shop! Activate a cash back offer, shop, check out, and we'll pay you back a percentage of what you spent."
                />
                <Question
                    question="How can RetailMeNot save me money when shopping online?"
                    answer="RetailMeNot offers several ways for shoppers to save while shopping. We feature up-to-date coupon codes, free shipping offers, sales and promo codes for thousands of stores and restaurants. Plus, our cash back offers pay you to shop! Activate a cash back offer, shop, check out, and we'll pay you back a percentage of what you spent."
                />
            </div>
        </div>
    );
};

export default Faq;
