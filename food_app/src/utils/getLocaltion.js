export async function getLocation() {
  try {
    if ('geolocation' in navigator) {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const apiKey = process.env.REACT_APP_CITY_API_KEY; 

      if (!apiKey) {
        throw new Error('Geocoding API key is missing.');
      }

      const geocodingURL = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
      const geocodingResponse = await fetch(geocodingURL);

      if (!geocodingResponse.ok) {
        throw new Error(`Geocoding API request failed with status ${geocodingResponse.status}`);
      }

      const geocodingData = await geocodingResponse.json();

      if (!geocodingData.results || geocodingData.results.length === 0) {
        throw new Error('City name not found in the geocoding response');
      }

      const city = geocodingData.results[0].components.city;

      return { latitude, longitude, city };
    } else {
      throw new Error('Geolocation is not supported in your browser');
    }
  } catch (error) {
    console.error('Error getting location: ' + error.message);
  }
}
