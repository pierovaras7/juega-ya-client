"use client"
import Footer from "@/components/landing/footer/Footer";
// import Navbar from "@/components/landing/navbar/Navbar";
import dataLanding from "@/app/json/dataLanding.json"
import Search from "@/components/landing/sections/home/Search";
import Advantages from "@/components/landing/sections/home/Advantages";
import HowWorks from "@/components/landing/sections/home/HowWorks";
import Clients from "@/components/landing/sections/home/Clients";

const MainProps = {
    pathImage: '/imgs/banner.avif',
    alt: 'Banner principal - JuegaYa'
}
const HomePage = () => {
    return (
        <div className="overflow-hidden">
            <Search/>               
            <Advantages></Advantages>
            <div className="flex flex-col items-center w-full h-full bg-cover"
                style={{ backgroundImage: "url('/imgs/pattern-section-how.png')" }}        
            >
                <HowWorks></HowWorks>
                <Clients></Clients>  
            </div>
        </div>
    );
};

export default HomePage;