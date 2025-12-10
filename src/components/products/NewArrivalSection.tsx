"use client";

import Image from "next/image";

export default function NewArrivalSection() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-10 bg-red-500 rounded"></div>
            <span className="text-red-500 font-semibold text-base">Featured</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-black dark:text-white">
            New Arrival
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

          {/* PlayStation - Large */}
          <div className="relative bg-black dark:bg-gray-800 rounded overflow-hidden group cursor-pointer min-h-[400px] md:min-h-[600px]">

            {/* Image */}
            <Image
              src="/audio.jpg"
              alt="PlayStation 5"
              fill
              className="object-cover transition-all duration-500 group-hover:brightness-50 dark:group-hover:brightness-75"
            />

            {/* Hover Text */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white max-w-md
              opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-500">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">PlayStation 5</h3>
              <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                Black and White version of the PS5 coming out on sale.
              </p>
              <a
                href="#"
                className="inline-block text-white font-medium border-b border-white pb-1"
              >
                Shop Now
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 lg:gap-8">

            {/* Women Collections */}
            <div className="relative bg-black dark:bg-gray-800 rounded overflow-hidden group cursor-pointer min-h-[280px]">
              <Image
                src="/clothes.jpg"
                alt="Women's Collections"
                fill
                className="object-cover transition-all duration-500 group-hover:brightness-50 dark:group-hover:brightness-75"
              />

              <div className="absolute bottom-0 left-0 p-6 text-white max-w-md
                opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500">
                <h3 className="text-2xl font-semibold mb-3">Women Collections</h3>
                <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                  Featured woman collections that give you another vibe.
                </p>
                <a href="#" className="inline-block text-white font-medium border-b border-white pb-1">
                  Shop Now
                </a>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">

              {/* Speakers */}
              <div className="relative bg-black dark:bg-gray-800 rounded overflow-hidden group cursor-pointer min-h-[280px]">
                <Image
                  src="/speaker.jpg"
                  alt="Speakers"
                  fill
                  className="object-cover transition-all duration-500 group-hover:brightness-50 dark:group-hover:brightness-75"
                />

                <div className="absolute bottom-0 left-0 p-6 text-white
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-500">
                  <h3 className="text-xl font-semibold mb-2">Speakers</h3>
                  <p className="text-sm text-gray-200 mb-3 leading-relaxed">
                    Amazon wireless speakers
                  </p>
                  <a href="#" className="inline-block text-white font-medium border-b border-white pb-1">
                    Shop Now
                  </a>
                </div>
              </div>

              {/* Perfume */}
              <div className="relative bg-black dark:bg-gray-800 rounded overflow-hidden group cursor-pointer min-h-[280px]">
                <Image
                  src="/fragrance.jpg"
                  alt="Perfume"
                  fill
                  className="object-cover transition-all duration-500 group-hover:brightness-50 dark:group-hover:brightness-75"
                />

                <div className="absolute bottom-0 left-0 p-6 text-white
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-500">
                  <h3 className="text-xl font-semibold mb-2">Perfume</h3>
                  <p className="text-sm text-gray-200 mb-3 leading-relaxed">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <a href="#" className="inline-block text-white font-medium border-b border-white pb-1">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
