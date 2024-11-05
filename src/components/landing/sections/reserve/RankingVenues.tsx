// components/RankingVenues.tsx
import { useEffect, useState } from "react";
import CourtList from "../partials/CourtList";
import { Place } from '@/app/types/fetchs';
import { fetchingRanking } from "@/lib/fetchRanking";

const RankingVenues = () => {
    
    return (
        <div className="px-8">
            <CourtList/>
        </div>
    );
};

export default RankingVenues;
