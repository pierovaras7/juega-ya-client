"use client"
import Footer from "@/components/landing/footer/Footer";
import Navbar from "@/components/landing/navbar/Navbar";
import CollectVenues from "@/components/landing/sections/reserve/CollectVenues";
import dataLanding from "@/app/json/dataLanding.json"
import RankingVenues from "@/components/landing/sections/reserve/RankingVenues";


export default function ReservePage() {
    return (
        <div
            className="w-full bg-cover bg-center py-4"
            style={{ backgroundImage: "url('/imgs/reserve-banner.avif')" }}
        >
            <CollectVenues />
            <RankingVenues />
        </div>
    );
}
