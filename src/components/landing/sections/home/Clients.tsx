"use client";
import { rubik_mono_one } from '@/app/fonts/googleFonts';
import { useLanding } from '@/context/LandingContext';
import Image from 'next/image';
import React, { useState } from 'react';
import { BsFillStarFill, BsStar } from 'react-icons/bs';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Clients: React.FC = () => {
    const testimonials = useLanding().dataLanding?.sectionsData?.homeData?.testimonialsData ?? [];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            setIsAnimating(false);
        }, 300);
    };

    const handlePrev = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
            setIsAnimating(false);
        }, 300);
    };

    const renderStars = (rating: number) => {
        return (
            <div className="flex justify-center mb-2">
                {Array.from({ length: 5 }, (_, index) => (
                    index < rating ? (
                        <BsFillStarFill key={index} className="text-yellow-500" />
                    ) : (
                        <BsStar key={index} className="text-gray-300" />
                    )
                ))}
            </div>
        );
    };

    if (testimonials.length === 0) {
        return <p className="text-center text-gray-600">No hay testimonios disponibles.</p>;
    }

    return (
        <div className="w-full py-12 px-4">
            <h2 className={`text-2xl md:text-4xl text-center font-semibold mb-8 text-blue-950 ${rubik_mono_one.className}`}>
                Lo que dicen nuestros clientes
            </h2>
            <div className="flex justify-center relative">
                <div className={`w-full max-w-md max-h-screen bg-white shadow-lg rounded-lg pt-5 md:p-6 text-center transition-all duration-300 ease-in-out transform ${isAnimating ? 'opacity-0 -translate-x-5' : 'opacity-100 translate-x-0'}`}>
                    <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name} 
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <h3 className={`text-lg text-green-800 font-bold mb-2 ${rubik_mono_one.className}`}>
                        {testimonials[currentIndex].name}
                    </h3>
                    {renderStars(testimonials[currentIndex].rating)}
                    <p className="text-gray-600 italic overflow-hidden h-20 line-clamp-3 text-sm md:text-md">
                        "{testimonials[currentIndex].feedback}"
                    </p>
                </div>
                {/* Flechas de navegación con animación */}
                <button 
                    className="absolute left-0 md:left-1/2 top-1/2 transform -translate-y-1/2 bg-gray-300 text-black rounded-full p-2 md:p-4 transition-transform duration-150 hover:bg-gray-400 active:scale-90"
                    onClick={handlePrev}
                >
                    <FaChevronLeft />
                </button>
                <button 
                    className="absolute right-0 md:right-1/4 top-1/2 transform -translate-y-1/2 bg-gray-300 text-black rounded-full p-2 md:p-4 transition-transform duration-150 hover:bg-gray-400 active:scale-90"
                    onClick={handleNext}
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Clients;
