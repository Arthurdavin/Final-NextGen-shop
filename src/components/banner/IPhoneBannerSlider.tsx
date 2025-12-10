'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

export default function IPhoneBannerSlider() {
  const banners = [
    {
      id: 1,
      title: "iPhone 14 Series",
      subtitle: "Up to 10% off Voucher",
      image: "/smartphone.jpg",
    },
    {
      id: 2,
      title: "iPhone 14 Pro",
      subtitle: "Special Discount Today",
      image: "/iphone14pro.png",
    },
    {
      id: 3,
      title: "iPhone 14 Pro Max",
      subtitle: "Limited Stock Offer",
      image: "/ipone14pro.png",
    },
  ];

  return (
    <div className="w-full rounded-xl overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="relative"
      >
        {banners.map((b) => (
          <SwiperSlide key={b.id}>
            <div className="relative w-full h-[260px] md:h-[360px] lg:h-[420px] bg-black">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />

              {/* Image */}
              <Image
                src={b.image}
                alt={b.title}
                fill
                className="object-contain object-right"
                priority
              />

              {/* Text content */}
              <motion.div
                className="absolute z-20 top-1/2 -translate-y-1/2 left-6 md:left-16 space-y-3 md:space-y-5"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-sm md:text-base opacity-80 text-white">📱 {b.title}</p>
                <h1 className="text-2xl md:text-4xl font-bold leading-tight text-white">
                  {b.subtitle}
                </h1>

                <Link href="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 md:px-10 py-2 md:py-3 rounded transition-colors duration-200"
                  >
                    Shop now
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
