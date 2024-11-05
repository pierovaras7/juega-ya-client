import React from 'react';
import { GrSchedules } from "react-icons/gr";
import { TbSoccerField } from "react-icons/tb";
import { BsTicketDetailedFill } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { rubik_mono_one } from '@/app/layout';
import { useLanding } from '@/context/LandingContext';

// Define los nombres de los iconos como un tipo
type IconName = 'TbSoccerField' | 'GrSchedules' | 'BsTicketDetailedFill' | 'GiPayMoney';

// Mapa de iconos
const iconMap: Record<IconName, React.ElementType> = {
    TbSoccerField: TbSoccerField,
    GrSchedules: GrSchedules,
    BsTicketDetailedFill: BsTicketDetailedFill,
    GiPayMoney: GiPayMoney,
};

const HowWorks: React.FC = () => {
    // Asegúrate de que el contexto esté retornando los datos esperados
    const steps = useLanding().dataLanding?.sectionsData.homeData.howWorkData;

    // Log para verificar los datos
    console.log(steps);

    return (
        <div className="flex flex-col items-center w-full h-full px-48 py-20">
            <h2 className={`text-4xl text-center font-semibold mb-8 text-blue-950 ${rubik_mono_one.className}`}>
                ¿Cómo <b className='text-green-700'>Funciona?</b>
            </h2>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
                {steps?.map((step, index) => {
                    // Asegúrate de que el valor de step.icon esté dentro de IconName
                    const IconComponent = iconMap[step.icon as IconName];

                    return (  // Agregar el return aquí
                        <div key={index} className="flex flex-row">
                            <div className='flex flex-col items-center m-2'>
                                {IconComponent ? <IconComponent size={50} color="#003366" className="group-hover:text-black" /> : null}
                            </div>
                            <div className='flex flex-col items-center text-justify m-2'>
                                <h3 className="text-md font-bold mb-1 w-full">{step.title}</h3>
                                <p className="text-gray-600 text-xs w-full">{step.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HowWorks;
