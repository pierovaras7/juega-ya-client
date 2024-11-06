// components/Autocomplete.tsx
import { fetchPlacesData, PlacePrediction } from '@/lib/fetchPlacesData';
import { sendRequest } from '@/lib/fetchSendRequest';
import { useState, useEffect, useRef, FormEvent } from 'react';
import Alert from '@/components/landing/sections/partials/Alert';

export default function Autocomplete() {
    const [input, setInput] = useState<string>(''); 
    const [results, setResults] = useState<PlacePrediction[]>([]);
    const [nombreSolicitud, setNombreSolicitud] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isUserTyping, setIsUserTyping] = useState(true);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState<'confirmation' | 'prevention'>('confirmation'); 

    // Función para buscar lugares
    const fetchPlaces = async (query: string) => {
        if (!query) {
            setResults([]);
            return;
        }

        try {
            const predictions = await fetchPlacesData(query);
            setResults(predictions);
        } catch (error) {
            console.error('Error fetching places:', error);
            setResults([]);
        }
    };

    useEffect(() => {
        if (isUserTyping) {
            fetchPlaces(input);
        }
    }, [input, isUserTyping]);

    const handleSelect = (description: string) => {
        console.log("Selected place description:", description); // Verifica qué valor se selecciona
        setInput(description);           // Establece el valor del input a la descripción seleccionada
        setNombreSolicitud(description); // Guarda el nombre de la solicitud
        setResults([]);                  // Limpia los resultados
        setIsUserTyping(false);          // Indica que el usuario no está escribiendo
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);    // Actualiza el input cuando el usuario escribe
        setIsUserTyping(true);            // Indica que el usuario está escribiendo
    };

    const handleContainerClick = () => {
        setResults([]); 
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!nombreSolicitud) {
            setAlertType('prevention'); 
            setResponseMessage('Por favor, introduce una cancha.');
            setShowAlert(true); 
            return;
        }

        try {
            const result = await sendRequest(nombreSolicitud);
            setAlertType('confirmation'); 
            setResponseMessage('Recinto registrado con éxito');
            setShowAlert(true); 
            setNombreSolicitud(''); // Limpia el nombre de la solicitud
            setResults([]); // Limpia los resultados
            setInput(''); // Limpia el input solo después de enviar
        } catch (error) {
            console.error(error);
            setAlertType('prevention'); 
            setResponseMessage('Error al registrar la cancha.');
            setShowAlert(true); 
        }
    };

    const handleCloseAlert = () => {
        setShowAlert(false); 
    };

    return (
        <div onClick={handleContainerClick} className="flex flex-col items-center justify-center px-8 md:p-6">
            <Alert 
                message={responseMessage} 
                visible={showAlert} 
                onClose={handleCloseAlert} 
                type={alertType} 
            />
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mb-8">
                <h1 className="text-2xl text-[#011828] font-bold mb-4 text-center">¡Dinos tu cancha favorita!</h1>
                <p className="text-gray-700 mb-4 text-center">
                    Tu opinión importa. Ayúdanos a incluir las mejores canchas para que siempre encuentres un lugar disponible cerca de ti.
                    Al mencionar tu cancha favorita, podríamos incluirla en la plataforma.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="relative mb-4">
                        <input
                            name="nombreSolicitud"
                            value={input}  // Vinculación con el estado
                            onChange={handleInputChange}
                            placeholder="Escribe un lugar"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        {results.length > 0 && (
                            <ul className="absolute z-50 w-full max-h-72 bg-white border border-gray-200 rounded-lg overflow-y-auto mt-1">
                                {results.map((place) => (
                                    <li
                                        key={place.place_id}
                                        onClick={() => handleSelect(place.description)} // Llama a handleSelect al hacer clic
                                        className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                                    >
                                        {place.description}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-700 text-white rounded-lg p-2 hover:bg-green-500 transition"
                    >
                        Quiero ver mi cancha en JuegaYa
                    </button>
                </form>
            </div>
        </div>
    );
}
