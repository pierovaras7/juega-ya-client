"use client"
import { rubik_mono_one } from "@/app/layout";
import { useLanding } from "@/context/LandingContext";

// app/conocenos/components/MissionSection.tsx
const MissionSection = () => {
    const { dataLanding } = useLanding();
    return (
        <section>
            <h2 className={`text-xl md:text-3xl font-semibold text-gray-700 mb-4 text-center ${rubik_mono_one.className} `}>Nuestra Misión</h2>
            <p className="text-gray-700 text-sm md:text-md text-justify">
                {dataLanding?.sectionsData.aboutData.header}
            </p>
        </section>
    );
};

export default MissionSection;
