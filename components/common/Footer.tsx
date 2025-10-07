import Image from "next/image";
import React from "react";
import {
    BsFacebook,
    BsInstagram,
    BsTiktok,
    BsX,
    BsYoutube,
} from "react-icons/bs";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-fit bg-white/5 backdrop-blur-lg">
            <div className="w-[80%] mx-auto pb-4 pt-16">
                <div className="grid grid-cols-12">
                    {/* logo  */}
                    <div className="col-span-4">
                        <div className="h-20 w-20 rounded-md bg-amber-400"></div>
                    </div>
                    {/* links  */}
                    <div className="col-span-2">
                        <h3 className="font-lg font-serif font-semibold text-neutral-100 tracking-wide mb-4 uppercase">
                            Links
                        </h3>

                        <ul className="flex flex-col gap-2">
                            <li className="text-sm text-neutral-400 hover:text-neutral-200 cursor-pointer transition-all">
                                Home
                            </li>
                            <li className="text-sm text-neutral-400 hover:text-neutral-200 cursor-pointer transition-all">
                                Coupons
                            </li>
                            <li className="text-sm text-neutral-400 hover:text-neutral-200 cursor-pointer transition-all">
                                Cash Back
                            </li>
                            <li className="text-sm text-neutral-400 hover:text-neutral-200 cursor-pointer transition-all">
                                Stores
                            </li>
                            <li className="text-sm text-neutral-400 hover:text-neutral-200 cursor-pointer transition-all">
                                Help
                            </li>
                        </ul>
                    </div>
                    {/* company links  */}
                    <div className="col-span-2">
                        <h3 className="font-lg font-serif font-semibold text-neutral-100 tracking-wide mb-4 uppercase">
                            Company
                        </h3>

                        <ul className="flex flex-col gap-2">
                            <li className="text-sm text-neutral-400 hover:text-neutral-200 cursor-pointer transition-all">
                                About Us
                            </li>
                            <li className="text-sm text-neutral-400 hover:text-neutral-200 cursor-pointer transition-all">
                                Press
                            </li>
                            <li className="text-sm text-neutral-400 hover:text-neutral-200 cursor-pointer transition-all">
                                Careers
                            </li>
                            <li className="text-sm text-neutral-400 hover:text-neutral-200 cursor-pointer transition-all">
                                Blog
                            </li>
                            <li className="text-sm text-neutral-400 hover:text-neutral-200 cursor-pointer transition-all">
                                Contact Us
                            </li>
                        </ul>
                    </div>
                    {/* app links  */}
                    <div className="col-span-4 justify-end flex">
                        <div>
                            <h3 className="font-lg font-serif font-semibold text-neutral-100 tracking-wide mb-4 uppercase">
                                Download the app
                            </h3>

                            <div className="flex flex-row gap-4">
                                <Image
                                    width={100}
                                    height={100}
                                    src="/extension-qr.svg"
                                    alt=""
                                />
                                <div>
                                    <div className="p-3 rounded-md bg-white/5 flex items-center gap-3 hover:bg-white/10 cursor-pointer transition-all">
                                        <FaAppStore size={25} />
                                        <p className="text-sm font-serif tracking-wide">
                                            Get it on App Store
                                        </p>
                                    </div>
                                    <div className="p-3 rounded-md bg-white/5 mt-4 flex items-center gap-3 hover:bg-white/10 cursor-pointer transition-all">
                                        <FaGooglePlay size={25} />
                                        <p className="text-sm font-serif tracking-wide">
                                            Get in to Google Play Store
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* last  */}
                <div className="flex flex-row items-center justify-between mt-16 mb-4 border-t border-neutral-700 pt-4">
                    <div className="flex flex-row gap-4">
                        <div className="h-10 w-10 bg-white/10 backdrop-blur-2xl rounded-full flex justify-center items-center cursor-pointer hover:bg-white/5 transition-all">
                            <BsFacebook />
                        </div>
                        <div className="h-10 w-10 bg-white/10 backdrop-blur-2xl rounded-full flex justify-center items-center cursor-pointer hover:bg-white/5 transition-all">
                            <BsInstagram />
                        </div>
                        <div className="h-10 w-10 bg-white/10 backdrop-blur-2xl rounded-full flex justify-center items-center cursor-pointer hover:bg-white/5 transition-all">
                            <BsX />
                        </div>
                        <div className="h-10 w-10 bg-white/10 backdrop-blur-2xl rounded-full flex justify-center items-center cursor-pointer hover:bg-white/5 transition-all">
                            <BsYoutube />
                        </div>
                        <div className="h-10 w-10 bg-white/10 backdrop-blur-2xl rounded-full flex justify-center items-center cursor-pointer hover:bg-white/5 transition-all">
                            <BsTiktok />
                        </div>
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed tracking-wide">
                        ©2006-2025 RetailMeNot, Inc., a Ziff Davis company.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
