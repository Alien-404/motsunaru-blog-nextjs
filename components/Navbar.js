import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);
  return (
    <nav className='flex justify-between items-center p-5 bg-yellow-400 text-white'>
      <div className='logo flex items-center space-x-3 '>
        <span className='font-bold text-2xl'>Motsunaru Blog</span>
      </div>
      <ul className='hidden md:flex space-x-10'>
        <li>
          <Link href={'/'}>
            <a className='border-b border-gray-800 border-opacity-0 hover:border-opacity-100'>
              Dashboard
            </a>
          </Link>
        </li>
      </ul>
      {/* Mobile Navigation - START */}
      <div className={`block md:hidden`}>
        <button onClick={() => setIsShow(true)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
      <ul
        className={`absolute top-0 left-0 w-full bg-gray-100 min-h-full bg-opacity-90 flex flex-col justify-center space-y-10 text-center ${
          isShow ? 'block' : 'hidden'
        } lg:hidden z-20`}
      >
        <li>
          <Link href={'/'}>
            <a className='border-b border-gray-800 border-opacity-0 hover:border-opacity-100'>
              Dashboard
            </a>
          </Link>
        </li>
        <li className='pt-10'>
          <button
            className='bg-black text-white px-4 py-2 rounded-md text-xs'
            onClick={() => setIsShow(false)}
          >
            Close
          </button>
        </li>
      </ul>
      {/* Mobile Navigation - END */}
    </nav>
  );
}
