import axios from 'axios';

export interface PlacePrediction {
    description: string;
    place_id: string;
}

export const fetchPlacesData = async (input: string): Promise<PlacePrediction[]> => {
    const url = `/api/fetchPlaces?input=${encodeURIComponent(input)}`; // Llama a tu API route
    console.log('URL:', url);

    try {
        const response = await axios.get(url);
        // Verifica que response.data.predictions exista antes de devolverlo
        return response.data.predictions as PlacePrediction[];
    } catch (error: any) {
        console.error('Error fetching places from API route:', error);
        throw new Error('Error fetching places');
    }
};

