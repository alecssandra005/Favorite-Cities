export async function getCityCoordinates(cityName) {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&language=en&count=1`);
  
    if (!response.ok) {
      throw new Error('Failed to fetch city coordinates');
    }
  
    const data = await response.json();
  
    if (data.results && data.results.length > 0) {
      return {
        name: data.results[0].name,
        latitude: data.results[0].latitude,
        longitude: data.results[0].longitude,
      };
    } else {
      return null;
    }
  }