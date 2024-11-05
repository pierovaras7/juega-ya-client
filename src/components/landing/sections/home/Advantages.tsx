"use client"
import { archivo_block, poppins, rubik_mono_one } from '@/app/layout';
import { useLanding } from '@/context/LandingContext';
import React, { useEffect, useState } from 'react';

const Advantages: React.FC = () => {
    const advs = useLanding().dataLanding?.sectionsData.homeData.advantagesData;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (advs && advs.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % advs.length);
            }, 4000); // Cambia cada 4 segundos

            return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
        }
    }, [advs]);

    if (!advs || advs.length === 0) {
        console.log(advs)
        return null; // Retorna null si `advs` está vacío o indefinido
    }

    return (
        <div className='flex flex-col justify-center bg-gray-0 my-8'>
            <h2 className={`w-full text-center p-4 uppercase text-5xl ${archivo_block.className} text-blue-950`}>
                Descubre lo que tenemos para <b className='text-green-600'>TI</b>
            </h2>
            <div className="flex flex-col items-center justify-between">
                <div className="w-3/4 h-[500px] relative">
                    <img 
                        src={advs[currentIndex].image} 
                        className="object-cover object-center h-full w-full transition-opacity duration-500 ease-in-out" 
                        alt={advs[currentIndex].title}
                    />
                    <div className='absolute bottom-0 bg-black bg-opacity-65 p-6 w-full'>
                        <h1 className={`text-xl uppercase text-white ${rubik_mono_one.className}`}>
                            {advs[currentIndex].title}
                        </h1>
                        <p className={`text-white text-justify ${poppins.className}`}>
                            {advs[currentIndex].descripcion}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;