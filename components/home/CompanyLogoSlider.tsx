"use client";
import { companies } from "@/data/images";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const CompanyLogoSlider = () => {
    return (
        <div className="w-[900px] mx-auto mb-10 z-10">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={8}
                loop={true}
                autoplay={{
                    delay: 25,
                    disableOnInteraction: false,
                }}
                speed={3000} // controls sliding speed
                className="flex items-center"
            >
                {companies.map((company) => (
                    <SwiperSlide
                        key={company.id}
                        className="flex justify-center"
                    >
                        <Image
                            src={company.logo}
                            alt={company.name}
                            width={100}
                            height={100}
                            className="h-20 w-20 object-contain rounded-md"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CompanyLogoSlider;
