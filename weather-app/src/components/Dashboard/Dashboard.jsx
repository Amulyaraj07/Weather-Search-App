import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faDroplet } from "@fortawesome/free-solid-svg-icons";

const Dashboard = ({ weatherData }) => {
  let imageURL = `https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;

  const toSentenceCase = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <section className="fixed right-4 left-70 top-25 h-[70vh] w-[70%] bg-white/20 border border-white/20 shadow-lg p-2 rounded-md flex flex-col justify-center items-center">
      <div className="bg-white/20 border border-white/20 rounded-md p-6 w-[80%] h-[80%] text-white flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold">{weatherData.location}</h2>

        {/* Weather Icon */}
        <img src={imageURL} alt="Weather Icon" className="w-24 h-24" />

        {/* Temperature & Condition */}
        <p className="text-4xl font-semibold">{weatherData.temp}° C</p>
        <p className="text-lg text-gray-600 font-bold">
          {toSentenceCase(weatherData?.condition || "No data available")}
        </p>

        {/* Humidity & Wind Speed */}
        <div className="flex gap-6 text-xl text-blue-900 font-bold">
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faDroplet} />
            Humidity: {weatherData.humidity}%
          </span>
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faWind} />
            Wind: {weatherData.wind} km/h
          </span>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
