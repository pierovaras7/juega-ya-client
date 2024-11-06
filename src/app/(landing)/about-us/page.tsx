"use client"
import AboutHeader from '@/components/landing/sections/about-us/AboutHeader';
import FeaturesSection from '@/components/landing/sections/about-us/FeaturesSection';
import MissionSection from '@/components/landing/sections/about-us/MissionSection';
import VisionSection from '@/components/landing/sections/about-us/VisionSection';
import React from 'react';


const ConocenosPage = () => {
    return (
            <main className="bg-gray-100 min-h-screen">
                {/* <Navbar></Navbar> */}
                <AboutHeader />
                <section className="py-10 px-6 max-w-5xl mx-auto space-y-10">
                    <div className='grid md:grid-cols-2 gap-6 '>
                        <MissionSection />
                        <VisionSection />
                    </div>
                    <FeaturesSection />
                </section>
            </main>
    );
};

export default ConocenosPage;
