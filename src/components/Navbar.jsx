import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Qui sommes-nous ?', href: '#qui-sommes-nous' },
        { name: 'Nos actions', href: '#nos-actions' },
        { name: 'Participer', href: '#participer' },
        { name: 'Suivez-nous', href: '#suivez-nous' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 glass-nav transition-all duration-300">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/assets/img/logo.png" className="h-20 md:h-28 w-auto object-contain" alt="Logo Générations Entraide" />
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a href="#faire-un-don" className="text-secondary bg-primary hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-primary/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center transition-colors">
                        <Heart className="w-4 h-4 mr-2" />
                        Faire un Don
                    </a>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="block py-2 px-3 text-secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 transition-colors">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
