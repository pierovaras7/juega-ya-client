// pages/api/fetchPlaces.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { GOOGLE_API_KEY } from '../../utils/config'; // Asegúrate de que esta clave esté en un archivo de configuración seguro.

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { input } = req.query;

    // Validación del parámetro input
    if (!input || typeof input !== 'string') {
        return res.status(400).json({ error: 'Input is required and must be a string' });
    }

    // Construcción de la URL para la API de Autocompletado de Google Places
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&components=country:PE&key=${GOOGLE_API_KEY}`;

    try {
        // Llamada a la API de Google Places
        const response = await axios.get(url);
        res.status(200).json(response.data); // Enviar los datos recibidos al cliente

        // Log opcional para depuración
        console.log(response.data);
    } catch (error) {
        // Log y respuesta de error
        console.error('Error fetching places from Google:', error);
        res.status(500).json({ error: 'Error fetching places' });
    }
}

