import axios from 'axios';

interface SolicitudResponse {
  // Define aquí la estructura de la respuesta esperada de la API
  message?: string; // Ejemplo: campo de mensaje
  // Agrega otros campos según la respuesta de tu API
}

export const sendRequest = async (nombreSolicitud: string): Promise<SolicitudResponse> => {
  try {
    console.log("el nombre es: " + nombreSolicitud); // Verifica que el valor sea correcto
    const response = await axios.post<SolicitudResponse>('https://juegaya-app.onrender.com/api/solicitud', {
      nombre_solicitud: nombreSolicitud,
    });
    console.log("Respuesta de la API:", response.data); // Muestra la respuesta de la API
    return response.data;
  } catch (error) {
    throw new Error('Error al enviar la solicitud');
  }
};
