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

    const itemsPerPage = 4;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const scrollToPage = (pageIndex: number) => {
        if (scrollRef.current) {
            const scrollContainer = scrollRef.current;
            const scrollAmount = scrollContainer.clientWidth * pageIndex;
            scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    };

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

    return (
        <>
            {/* Scroll Container */}
            <div
                ref={scrollRef}
                className="flex mt-12 overflow-x-auto  gap-4 scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 snap-x snap-mandatory"
            >
                {data.map((item, index) => (
                    <div
                        key={item.slug || index}
                        className="flex-shrink-0 snap-start"
                        style={{ width: '25%', minWidth: '250px', marginTop: '8px', marginBottom: '8px' }}
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
