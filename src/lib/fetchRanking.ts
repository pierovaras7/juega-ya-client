  
export async function fetchingRanking() {
  try {
    const res = await fetch('https://juegaya-app.onrender.com/api/ranking');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching ranking data:", error);
    return null; // Devuelve null o un valor alternativo si ocurre un error
  }
}
