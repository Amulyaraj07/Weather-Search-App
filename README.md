# Weather Dashboard

A simple weather dashboard application that allows users to search for weather updates of any city using the OpenWeather API.

## 🌟 Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Icons:** Font Awesome
- **API:** OpenWeather API

## 🚀 Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Set Up Environment Variables

Create a **.env** file in the root directory and add your OpenWeather API key:

```sh
VITE_URL=your_openweather_api_key
```

### 4. Run the Application

```sh
npm run dev
```

## 🌍 API Integration Details

### API Used: **OpenWeather API**

- **Base URL:** `https://api.openweathermap.org/data/2.5/weather`
- **Request Format:**
  ```sh
  https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&units=metric&appid={API_KEY}
  ```
- **Response Format:** JSON containing temperature, humidity, wind speed, and weather conditions.

### API Rate Limits

- **Free Tier:** Up to **60 requests per minute**
- For higher limits, consider upgrading your OpenWeather API plan.

## 📷 Screenshots

(Add screenshots of your application if available)

## 📜 License

This project is licensed under the MIT License.

## 🤝 Contribution

Feel free to fork, raise issues, or submit pull requests to improve the project.

---

Developed by **Amulya Raj** 🚀
