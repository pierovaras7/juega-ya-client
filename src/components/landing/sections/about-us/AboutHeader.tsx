"use client"
import { rubik_mono_one } from "@/app/fonts/googleFonts";
import { useLanding } from "@/context/LandingContext";

// app/conocenos/components/AboutHeader.tsx
const AboutHeader = () => {
    const { dataLanding } = useLanding();
    return (
        <header className="text-center p-10 bg-gray-700 text-white"
        style={{ backgroundImage: "url('/imgs/au-header.avif')",         backgroundPosition: 'center bottom'  // Esto enfoca la parte inferior
        }}>
            <h1 className={`text-2xl uppercase font-bold text-white ${rubik_mono_one.className}`}>Conócenos</h1>
            <p className="mt-4 text-sm md:text-xl">
                {dataLanding?.sectionsData.aboutData.header}
            </p>
        </header>
    );
};

export default AboutHeader;
