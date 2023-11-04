import { NAV_LINKS } from '@/constants';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import Button from './Button';

const Navbar = () => {
    return (
        <nav className='max-container padding-container relative z-30 py-5 p-5 flex justify-between items-center'>
            <Link href='/'>
                <img src='logo.png' alt='logo' width={160} height={100} />
                {/* <Image src='hilink-logo.svg' alt='logo' width={74} height={29} /> */}
            </Link>
            <ul className='h-full gap-12 lg:flex hidden'>
                {NAV_LINKS.map(link => (
                    <Link href={link.href} key={link.key} className='regular-16 text-gray-500 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold '>
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className='lg:flex-center'>
                <Button
                    type="button"
                    title="Login"
                    icon='user.svg'
                    variant='bg-black p-2 px-3 text-gray-300 flex transition-all hover:bg-emerald-500 hover:text-green-200 hover:border-light-900'
                />
            </div>
            <Image src='menu.svg' alt='menu' width={32} height={32} className='inline-block cursor-pointer lg:hidden' />
        </nav>


    );
}

export default Navbar;