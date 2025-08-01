import Image from 'next/image';
import Link from 'next/link';
import { Menu, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
   
        <div className="flex items-center space-x-4">
          <button className="flex flex-col items-center space-y-1 text-red-600 text-xs">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-red-600"></span>
              <span className="block w-6 h-0.5 bg-red-600"></span>
              <span className="block w-6 h-0.5 bg-red-600"></span>
            </div>
            <span className="mt-1">MENU</span>
          </button>

          <div className="hidden sm:flex items-center space-x-2">
            {/* <Image
              src="/newspaper-sample.jpg" 
              alt="Journal"
              width={60}
              height={60}
              className="object-contain"
            /> */}
            <Link href="#" className=" underline text-sm">
              Consulter le journal
            </Link>
          </div>
        </div>

        <div className="text-center flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2">
            {/* <Image
              src="/duck-left.png" 
              alt="Duck Left"
              width={40}
              height={40}
              className="hidden sm:block"
            /> */}
            <h1 className="text-2xl sm:text-4xl font-black font-serif leading-none">
              Le Canard <br className="sm:hidden" />
              <span className="sm:ml-2 font-bold">enchaîné</span>
            </h1>
            {/* <Image
              src="/duck-right.png" 
              alt="Duck Right"
              width={40}
              height={40}
              className="hidden sm:block"
            /> */}
          </div>
          <p className="text-sm text-red-600 mt-1">
            Journal satirique paraissant le mercredi et sur Internet
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-yellow-400 text-black rounded-full px-4 py-2 text-sm font-semibold hover:bg-yellow-500">
            S’abonner
          </button>

          <Link href="#" className="flex items-center space-x-1 text-black hover:text-red-600 text-sm">
            <User className="w-4 h-4 text-red-600" />
            <span>Se connecter</span>
          </Link>

          <button>
            <Search className="w-5 h-5 text-red-600 hover:text-black" />
          </button>
        </div>
      </div>
    </header>
  );
}
