"use client";
import { poppins, rubik_mono_one } from "@/app/layout";
import { useLanding } from "@/context/LandingContext";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaAlignJustify } from 'react-icons/fa';

const Navbar = () => {
    const { dataLanding } = useLanding();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { // 768px es el breakpoint para md
                setIsNavbarOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);

        // Limpia el listener en el desmontaje
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Verifica si dataLanding está presente antes de renderizar
    if (!dataLanding) {
        return null; // No renderiza nada si los datos no están disponibles
    }

    const { title, logo, links } = dataLanding?.navbarData; // Asegúrate de que estos datos existen

    const lastTwoLetters = title?.slice(-2);
    const mainText = title?.slice(0, -2);

    return (
        <div className={`md:max-h-20 top-0 left-0 w-full flex flex-col md:flex-row text-white ${poppins.className} z-50 ${isScrolled ? 'md:bg-transparent transition-colors duration-300 ease-in-out' : ''}`}
            style={{ backgroundColor: '#041e28' }}>
            <div className={`flex md:w-2/5 justify-between items-center m-2 px-6 py-3`}>
                <Link href="/home" passHref>
                    <div className={`flex items-center`}>
                        <img src={logo} alt="Logo" className="w-16 h-auto cursor-pointer" />
                        <h1 className={`text-xl md:text-3xl px-4 ${rubik_mono_one.className}`}>
                            {mainText}<b className="text-green-600">{lastTwoLetters}</b>
                        </h1>
                    </div>
                </Link>
                <div onClick={toggleNavbar} className="md:hidden flex items-center justify-center cursor-pointer p-2">
                    <FaAlignJustify className="text-2xl" />
                </div>
            </div>

            <div
                className={`flex flex-col md:flex-row w-full justify-end md:px-0 md:py-0 md:gap-0 overflow-hidden transition-all duration-1000 ease-in-out ${isNavbarOpen ? 'max-h-screen' : 'max-h-0'} md:max-h-none md:flex`}
            >
                {links?.map((link, id) => {
                    const boolButton = link.button; // Mueve esta línea aquí
                    return (
                        <div key={id} className={`flex items-center w-full justify-start md:justify-center md:items-center md:w-1/5 px-5 py-3 ${isNavbarOpen ? 'hover:bg-gray-400' : (!boolButton ? 'hover:bg-gray-400' : '' )}`}>
                            <Link href={link.url} onClick={() => setIsNavbarOpen(false)}>
                                {!boolButton ? (
                                    <p className="text-sm lg:text-lg uppercase font-extrabold">{link.label}</p>
                                ) : (
                                    <p className="text-sm uppercase font-extrabold lg:font-thin lg:bg-green-700 lg:rounded-2xl lg:p-4 lg:text-xs text-center">{link.label}</p>
                                )}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Navbar;
