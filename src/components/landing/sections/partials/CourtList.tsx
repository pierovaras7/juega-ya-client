import { rubik_mono_one } from '@/app/fonts/googleFonts';
import { useLanding } from '@/context/LandingContext';
import React, { useState } from 'react';



export default function CourtList (){
    const { dataRanking }  = useLanding();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const courts = dataRanking; // Asegúrate de que sea un array
    const indexOfLastCourt = currentPage * itemsPerPage;
    const indexOfFirstCourt = indexOfLastCourt - itemsPerPage;
    const currentCourts = courts.slice(indexOfFirstCourt, indexOfLastCourt);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const totalPages = Math.ceil(courts?.length / itemsPerPage);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r bg-slate-100 rounded-lg shadow-lg bg-opacity-85">
            <h2 className={`text-3xl font-bold mb-6 text-center text-gray-700 ${rubik_mono_oneCLS.className}`}>Ranking de Canchas</h2>
            <ul className="bg-white shadow rounded-lg overflow-hidden divide-y divide-gray-200 min-h-[360px]">
                {currentCourts?.map((court, index) => (
                    <li key={court.id_ranking} className="p-3 flex items-center justify-between hover:bg-gray-100 transition-colors">
                        <span className="text-gray-700 font-semibold text-lg text-right w-4">{indexOfFirstCourt + index + 1}</span>
                        <div className="flex-1 ml-4">
                            <span className="text-gray-800 font-semibold text-lg">{court.nombre_ranking}</span>
                            <p className="text-sm text-gray-500">Menciones: {court.menciones}</p>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-6 space-x-2">
                <button
                    onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                    className={`px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition ${
                        currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`px-4 py-2 rounded-lg ${
                            currentPage === index + 1
                                ? 'bg-gray-700 text-white shadow-md'
                                : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-100'
                        } transition`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                    className={`px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition ${
                        currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                    disabled={currentPage === totalPages}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

