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
  // { label: 'Lifestyle', category: 'lifestyle' },

];

export default function Navbar() {
  return (
    <div className="w-full fixed top-[70px] z-40 border-b border-gray-300 text-[18px] p-1 font-custom" style={{
      backgroundColor: '#4f4f48', fontWeight: 400
    }}>
      <div className="flex px-3 py-2 gap-12 whitespace-nowrap">
        {NavItems.map((item) => (
          <Link
            key={item.category}
            href={`/${item.category}`}
            title={item.category}
            className="text-white hover:underline whitespace-nowrap tracking-wide"

          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

