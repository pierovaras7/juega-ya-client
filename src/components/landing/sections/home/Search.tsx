"use client";
import { useLanding } from "@/context/LandingContext";
import { useState } from "react";
import { FaSearchLocation } from 'react-icons/fa';
import AutocompleteInput from "../partials/AutocopleteInput";
import Image from "next/image";
import { archivo_block, poppins } from "@/app/fonts/googleFonts";

const Search = () => {
    const dataSearch = useLanding().dataLanding?.sectionsData.homeData.searchData;

    const [selectedOption, setSelectedOption] = useState<string>("");
    const [inputValue, setInputValue] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="lg:h-[700px] overflow-hidden relative">
            {dataSearch?.img && (
            <Image
                src={dataSearch.img}
                alt="Banner img search"
                className="object-cover w-full h-full"
            />
            )}

            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className={`${archivo_block.className} text-6xl`}>
                    <p className="text-white text-center">BUSCA, RESERVA &</p>
                    <p className="text-green-600 text-center"> JUEGA</p>
                </h1>
                <h2 className={`${poppins.className} text-lg text-white m-5`}>Encuentra los mejores escenarios deportivos cerca a ti</h2>
                <div className="flex flex-col md:flex-row bg-black bg-opacity-50 px-10 py-8 gap-2 w-1/2">
                    <div className="flex items-center justify-center md:w-1/5">
                        <select
                            id="comboBox"
                            value={selectedOption}
                            onChange={handleChange}
                            className="block bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 text-sm w-full h-10 p-2"
                        >
                            <option value="" disabled>Selecciona un deporte</option>
                            {dataSearch?.sports.map((sport, index) => (
                                <option key={index} value={sport}>{sport}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center md:w-3/5 relative">
                        <FaSearchLocation className="absolute left-3 text-gray-500" />
                        <AutocompleteInput
                            value={inputValue}
                            onChange={setInputValue}
                            placeholder="Escribe un lugar"
                        />
                    </div>
                    <div className="flex items-center md:w-1/5">
                        <button className="text-white text-xs rounded-md p-2 bg-green-800 w-full h-10">Buscar recinto</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
