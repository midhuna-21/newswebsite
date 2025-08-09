'use client';

import React, { useRef, useState, useEffect } from 'react';
import DetailCard from './DetailCard';

interface NewsData {
    slug: string;
    title: string;
    category: string;
    shortdescription: string;
    description: string;
    image: string;
    date: string;
}

interface Props {
    data: NewsData[];
}

const DetailCardSection: React.FC<Props> = ({ data }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const pageWidth = scrollRef.current.clientWidth;
            const page = Math.round(scrollLeft / pageWidth);
            setCurrentPage(page);
        }
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to a specific page
    const scrollToPage = (pageIndex: number) => {
        if (scrollRef.current) {
            const scrollContainer = scrollRef.current;
            const scrollAmount = scrollContainer.clientWidth * pageIndex;
            scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Items per page for pagination
    const itemsPerPage = 4;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    return (
        <>
            {/* Scroll Container */}
            <div
                ref={scrollRef}
                className="flex mt-12 overflow-x-auto gap-4 scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 snap-x snap-mandatory"
            >
                {data.map((item, index) => (
                  <div
    key={`${item.slug}-${index}`}
    className="flex-shrink-0 snap-start 
               w-full md:w-1/2 lg:w-1/3 xl:w-1/4
               min-w-full md:min-w-[50%] lg:min-w-[33.3333%] xl:min-w-[25%]"
>
    <DetailCard data={item} />
</div>

                ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-4 gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollToPage(i)}
                        className={`w-3 h-3 rounded-full ${currentPage === i ? 'bg-red-500' : 'bg-gray-400'
                            }`}
                    ></button>
                ))}
            </div>
        </>
    );
};

export default DetailCardSection;
