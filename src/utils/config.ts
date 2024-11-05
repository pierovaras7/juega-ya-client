// config.ts
export const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

if (!GOOGLE_API_KEY) {
    console.error('Error: GOOGLE_API_KEY is not defined. Please check your .env file.');
} else {
    console.log('GOOGLE_API_KEY:', GOOGLE_API_KEY); // Para verificar que se está cargando correctamente
}
