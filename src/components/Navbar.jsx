import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/asstes/logo.png';

const Navbar = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-between mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold text-xltext-[#0B2D5B]">
                        <li ><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/books'}>All Books</Link></li>
                        <li><Link href={'/profile'}>My Profile</Link></li>
                    </ul>
                </div>
                <div className='flex items-center justify-between gap-3'>
                    <div>
                    <Image src={logo} alt='logo' width={60} height={60} />
                    </div>
                    <div>
                        <h4 className='font-bold text-2xl text-[#0B2D5B]'>Book Borrow</h4>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex items-center text-center">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/books'}>All Books</Link></li>
                    <li><Link href={'/profile'}>My Profile</Link></li>
                </ul>
            </div>
            <div className='navbar-end gap-4'>
                <h2 className='font-semibold text-xl text-[#0B2D5B]'>Hello</h2>
            <button className="btn  w-25 bg-[#F39C12] text-[#0B2D5B] font-semibold text-xl">
                <Link href={'/login'}>Login</Link>
            </button>
            </div>
        </div>
    );
};

export default Navbar;