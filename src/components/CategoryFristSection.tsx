
import Image from 'next/image';
import Link from 'next/link';

interface NewsData {
    slug: string;
    title: string;
    category: string;
    shortdescription: string;
    description: string;
    date: string;
    image: string;
}
interface Props {
    data: NewsData;
}

const CategoryFirstSection: React.FC<Props> = ({ data }) => {
    return (
        <section className="w-full mt-5 bg-white text-black border-gray-200 pb-12">
            <Link href={`/${data.category}/${data.slug}`} className='text-decoration-none' title={`${data.slug}`}>
                <div className="md:max-w-7xl mx-auto">
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-2">
                            <h1 className=" text-2xl md:text-6xl font-custom leading-none uppercase" style={{fontWeight:900}}>
                                {data.category}
                            </h1>
                        </div>
                        <p className="text-red-600 font-custom text-sm mt-1 uppercase">
                            {data.title}
                        </p>
                    </div>
                    <div className="mt-6 space-y-6 leading-relaxed">
                        <p
                    className="text-base sm:text-lg md:text-lg lg:text-xl text-black text-left font-custom"
                    style={{ fontWeight: 400 }}
                >
                            {data.shortdescription}
                        </p>
                    </div>
                </div>
            </Link>
        </section>
    );
}


export default CategoryFirstSection;