const apiKey = "1986480656ec490d950204923202611";

export const fetchWeatherData = async (location) => {
  // legacy call working on new one with forecast 5days
  // const call = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
  const newCall = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5&aqi=no&alerts=no`;
  return await makeRequest(newCall);
};

const makeRequest = async (call) => {
  return fetch(call)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
