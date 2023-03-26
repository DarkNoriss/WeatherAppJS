const apiKey = "1986480656ec490d950204923202611";

export const fetchWeatherData = async (location) => {
  const call = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
  return await makeRequest(call);
};

const makeRequest = async (call) => {
  return fetch(call)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
