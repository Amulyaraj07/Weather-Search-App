import React, { useState, useEffect } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [city, setCity] = useState("London");
    const [weatherData, setWeatherData] = useState(false);

    const search = async (cityName) => {
        if (!cityName.trim()) {
            alert("Please enter a city name");
            return;
        }
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${import.meta.env.VITE_URL}`);
            let data = await response.json();
            
            console.log(data);
            if (data.cod !== 200) {
                alert("Enter a valid city");
                return;
            }
            
            setWeatherData({
                humidity: data.main.humidity,
                wind: data.wind.speed,
                temp: Math.floor(data.main.temp),
                location: data.name,
                icon: data.weather[0].icon,
                condition: data.weather[0].description,
            });
            setCity(data.name);
        } catch (error) {
            console.log(error);
            alert("Something went wrong. Try again later.");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && city.trim() !== "") {
            search(city.trim());
        } else if (event.key === "Enter" && city.trim() === "") {
            alert("Please enter a city name");
            return;
        }
    };

    useEffect(() => {
        search("London");
    }, []);

    return (
        <>
            <section className="left-25 w-[80%] h-20 mt-2 bg-white/20 border border-white/20 rounded-md flex justify-center items-center gap-6 mx-auto p-4">
                {/* Location */}
                <div>
                    <span className="text-base text-2xl">
                        <FontAwesomeIcon icon={faLocationDot} size="2xl" style={{color: "#163160"}} />
                    </span>
                </div>

                {/* Search Bar */}
                <div className="relative w-[50%]">
                    <input
                        type="text"
                        id="bar"
                        placeholder="Search for a city..."
                        className="w-full h-10 py-2 bg-black/10 border border-white/20 rounded-md text-white outline-none placeholder-white"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div className="relative w-[5%]">
                    <span className="cursor-pointer" onClick={() => search(city.trim())}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#163160"}} size="xl" />
                    </span>
                </div>
            </section>
            <Dashboard weatherData={weatherData} />
        </>
    );
};

export default Header;
