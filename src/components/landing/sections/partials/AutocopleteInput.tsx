import { Place } from '@/app/types/fetchs';
import { fetchPlacesData, PlacePrediction } from '@/lib/fetchPlacesData';
import React, { useState, useEffect } from 'react';

interface AutocompleteInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({ value, onChange, placeholder }) => {
    const [suggestions, setSuggestions] = useState<PlacePrediction[]>([]);

    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        onChange(inputValue);

        if (inputValue) {
            try {
                const placesData = await fetchPlacesData(inputValue);
                setSuggestions(placesData);
            } catch (error) {
                console.error('Error fetching place suggestions:', error);
            }
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div className="relative w-full">
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 text-sm"
            />
            {suggestions.length > 0 && (
                <ul className="absolute z-10 bg-white border border-gray-300 w-full rounded-lg mt-1  overflow-auto max-h-24 md:max-h-52">
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion.place_id}
                            onClick={() => onChange(suggestion.description)}
                            className="p-2 cursor-pointer hover:bg-gray-100 text-sm"
                        >
                            {suggestion.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AutocompleteInput;
