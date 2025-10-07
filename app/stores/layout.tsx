"use client";
import React, { FC } from "react";

interface StoreLayoutProps {
    children: React.ReactNode;
}

const StoreLayout: FC<StoreLayoutProps> = ({ children }) => {
    return <main>{children}</main>;
};

export default StoreLayout;
