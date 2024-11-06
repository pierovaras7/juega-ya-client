"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchingData } from '@/lib/fetchData';
import { fetchingRanking } from '@/lib/fetchRanking';
import { Place } from '@/app/types/fetchs';


interface LandingContextType {
    dataLanding: LandingData | null;
    dataRanking: Place[];
}

export interface LandingData {
    navbarData : NavbarData,
    sectionsData: SectionsData,
    footerData: FooterData
}

const LandingContext = createContext<LandingContextType | undefined>(undefined);

export const LandingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [dataLanding, setDataLanding] = useState<LandingData | null>(null);
    const [dataRanking, setDataRanking] = useState<Place[] | null>([]); // Corregido: Tipo y valor inicial

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchingData();
                setDataLanding(data);
            } catch (error) {
                console.error("Error fetching data Landing: ", error);
            }
        };

        const getCourtsData = async () => {
            try {
                const courts = await fetchingRanking();
                setDataRanking(courts);
            } catch (error) {
                console.error("Error fetching data Ranking: ", error);
            }
        };
        
        fetchData();
        getCourtsData();

    }, []);

    // Renderizar nada hasta que los datos estén listos
    if (!dataLanding || !dataRanking)
        return null;
  

    return (
        <LandingContext.Provider value={{ dataLanding, dataRanking}}>
            {children}
        </LandingContext.Provider>
    );
};

export const useLanding = () => {
    const context = useContext(LandingContext);
    if (!context) {
        throw new Error("useLanding must be used within a LandingProvider");
    }
    return context;
};

