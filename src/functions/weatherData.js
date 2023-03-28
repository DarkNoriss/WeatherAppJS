const apiKey = "e40d0815f3d749dba28211048232503";

export const fetchWeatherData = async (location) => {
  // legacy call working on new one with forecast 5days
  // const call = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
  const newCall = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`;
  return await makeRequest(newCall);
};

const makeRequest = async (call) => {
  return fetch(call)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
