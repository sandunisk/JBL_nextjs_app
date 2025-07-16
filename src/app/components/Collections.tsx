'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

type Product = {
    name: string;
    imageSrc: string;
};

const products: Product[] = [
    { name: 'SoundCore Mini', imageSrc: '/img1.png' },
    { name: 'SoundCore Forge Hi', imageSrc: '/img2.png' },
    { name: 'SoundCore Triungle Mini', imageSrc: '/img3.png' },
    { name: 'SoundCore Boost', imageSrc: '/img4.png' },
    { name: 'SoundCore Wave Pro', imageSrc: '/img5.png' },
    { name: 'SoundCore Apex', imageSrc: '/img6.png' },
];

export default function Collections() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleWheelScroll = (e: WheelEvent) => {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
        };

        container.addEventListener('wheel', handleWheelScroll, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheelScroll);
        };
    }, []);

    return (
        <div className="flex flex-col lg:flex-row p-12 bg-gray-100 items-start gap-8 pb-12">
            {/* Left side - Header Section */}
            <div className="flex-1">
                <h1 className="text-3xl leading-10 lg:text-6xl mb-6 lg:leading-18">
                    Selected Picks from <br />the Soundcore Collection
                </h1>
                <div className="max-w-md">
                    <p className="text-gray-500">
                        A curated collection of our most loved SoundCore collection devices chosen for clarity, power, and portability.
                    </p>
                </div>
            </div>

            {/* Right side - Pictures Section */}
            <div className="flex-1 max-w-[900px]">
                <div className="overflow-hidden">
                    <div
                        ref={scrollContainerRef}
                        className='flex gap-6 overflow-x-auto pb-4 hide-scrollbar'
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {products.map((product) => (
                            <div key={product.name} className='flex-shrink-0 w-72 text-center'>
                                <div className='bg-white rounded-2xl overflow-hidden shadow-sm'>
                                    <Image 
                                        src={product.imageSrc}
                                        alt={product.name}
                                        width={400}
                                        height={500}
                                        className='w-full h-full aspect-[3/4] object-cover' 
                                    />
                                </div>
                                <p className='mt-4 font-medium text-left text-gray-400'>{product.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}