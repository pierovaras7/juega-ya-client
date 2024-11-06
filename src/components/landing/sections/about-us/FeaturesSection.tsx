// app/conocenos/components/FeaturesSection.tsx
"use client"
import { rubik_mono_one } from '@/app/fonts/googleFonts';
import { useLanding } from '@/context/LandingContext';
import { IconType } from 'react-icons';
import { FaFutbol, FaStopwatch, FaCheckCircle, FaCreditCard} from 'react-icons/fa';

// Mapeo de iconos
const iconMap: Record<string, IconType> = {
    FaFutbol: FaFutbol,
    FaStopwatch: FaStopwatch,
    FaCheckCircle: FaCheckCircle,
    FaCreditCard: FaCreditCard
};

const FeaturesSection = () => {
    const { dataLanding } = useLanding();
    const features = dataLanding?.sectionsData?.aboutData?.caracteristicas;

    return (
        <section>
            <h2 className={`text-2xl md:text-3xl font-semibold text-gray-700 mb-6 uppercase text-center ${rubik_mono_one.className}`}>
                Características
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {features?.map((feature, index) => {
                    // Obtener el icono usando el mapeo y aplicar las clases
                    const IconComponent = iconMap[feature.icon];
                    return (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center">
                            {IconComponent && <IconComponent className={feature.iconClass} />}
                            <h3 className="mt-4 text-xl font-semibold text-gray-800">{feature.title}</h3>
                            <p className="mt-2 text-gray-600 text-sm">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FeaturesSection;

