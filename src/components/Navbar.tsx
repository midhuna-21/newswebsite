import Link from 'next/link';

const NavItems = [
  { label: 'Business', category: 'business' },
  { label: 'Technology', category: 'technology' },
  { label: 'Sports', category: 'sports' },
  { label: 'Health', category: 'health' },
  { label: 'Science', category: 'science' },
  { label: 'Politics', category: 'politics' },
  { label: 'Entertainment', category: 'entertainment' },
  { label: 'Education', category: 'education' },
  { label: 'Lifestyle', category: 'lifestyle' },

];

export default function Navbar() {
  return (
<div className="w-full fixed top-[70px] z-40 border-b border-gray-300 bg-amber-800 text-[16px] font-bold">

      <div className="flex px-3 py-2 gap-12 whitespace-nowrap">
        {NavItems.map((item) => (
          <Link
            key={item.category}
            href={`/${item.category}`}
            title={item.category}
            className="text-white no-underline whitespace-nowrap flex-shrink-0"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

