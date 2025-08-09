
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

                {/* Logo and Subtitle */}
                <div className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                        <h1 className=" text-2xl md:text-6xl font-bold leading-none uppercase">
                                    {data.category}
                        </h1>
                    </div>

                    <p className="text-red-600 font-semibold text-sm mt-1 uppercase">
                        {data.title}
                    </p>

                </div>

                {/* Main Text */}


                <div className="mt-6 space-y-6 text-lg leading-relaxed">
                    <p>
                        {data.shortdescription}
                    </p>

                </div>
            </div>
            </Link>
        </section>
    );
}


export default CategoryFirstSection;