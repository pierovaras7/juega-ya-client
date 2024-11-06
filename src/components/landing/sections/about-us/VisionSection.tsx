"use client"
import { rubik_mono_one } from "@/app/fonts/googleFonts";
import { useLanding } from "@/context/LandingContext";

// app/conocenos/components/VisionSection.tsx
const VisionSection = () => {
    const { dataLanding } = useLanding();
    return (
        <section>
            <h2 className={`text-xl md:text-3xl font-semibold text-gray-700 mb-4 text-center ${rubik_mono_one.className}`}>Nuestra Visión</h2>
            <p className="text-gray-700 text-sm md:text-md text-justify">               
                {dataLanding?.sectionsData.aboutData.vision}
            </p>
        </section>
    );
};

export default VisionSection;
