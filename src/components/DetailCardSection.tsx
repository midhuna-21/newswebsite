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

    const scrollToPage = (pageIndex: number) => {
        if (scrollRef.current) {
            const scrollContainer = scrollRef.current;
            const scrollAmount = scrollContainer.clientWidth * pageIndex;
            scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const itemsPerPage = 4;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    return (
        <>
            <div className="mt-12 mb-6">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 snap-x snap-mandatory pb-4"
                    style={{ 
                        scrollbarGutter: 'stable',
                    }}
                >
                    {data.map((item, index) => (
                        <div
                            key={`${item.slug}-${index}`}
                            className="flex-shrink-0 snap-start"
                            style={{ 
                                width: 'calc(25% - 18px)', 
                                minWidth: '280px' 
                            }}
                        >
                            <DetailCard data={item} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollToPage(i)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                            currentPage === i ? 'bg-red-500' : 'bg-gray-400 hover:bg-gray-500'
                        }`}
                    ></button>
                ))}
            </div>
        </>
    );
};

export default DetailCardSection;