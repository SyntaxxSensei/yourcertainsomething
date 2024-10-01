"use client"

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="flex flex-row p-5 justify-between items-center">
                <div className="flex flex-shrink-0">
                    <a href='/'>
                        <Image src={'/images/heartlogo.gif'} alt='logo' width="80" height="80" />
                    </a>
                    <p className="text-2xl font-bold p-5"><a href="/">Your Certain Something</a></p>
                </div>
                <ul className="hidden md:flex">
                    <li className="p-4 text-lg"><a href="/">Home</a></li>
                    <li className="p-4 text-lg"><a href="/about">About</a></li>
                    <li className="p-4 text-lg"><a href="/projects">Projects</a></li>
                    <li className="p-4 text-lg"><a href="/contact">Contact</a></li>
                </ul>
                <div className="md:hidden flex" onClick={() => setMenuOpen(!menuOpen)}>
                    <Menu className="text-gray-900 hover:text-red-500" size={32} />
                </div>
                {menuOpen && (
                    <div className="absolute top-0 left-0 w-full h-full bg-white text-gray-900">
                        <X className="text-gray-900 absolute top-10 right-5 hover:text-red-500" size={32} onClick={() => setMenuOpen(!menuOpen)} />
                        <ul className="mt-8 ml-4">
                            <li className="p-4 text-lg"><a href="/">Home</a></li>
                            <li className="p-4 text-lg"><a href="/about">About</a></li>
                            <li className="p-4 text-lg"><a href="/projects">Projects</a></li>
                            <li className="p-4 text-lg"><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}
