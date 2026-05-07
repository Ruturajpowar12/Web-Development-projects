# Weather App

A simple and elegant weather application that provides real-time weather information for any city in the world.

## Features

- **Search by City**: Enter any city name to get current weather information
- **Real-time Data**: Fetches live weather data from OpenWeatherMap API
- **Temperature Display**: Shows current temperature in Celsius
- **Humidity Information**: Displays current humidity percentage
- **Wind Speed**: Shows wind speed in km/h
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful gradient card design with intuitive interface

## Technologies Used

- **HTML5**: Markup structure
- **CSS3**: Styling and responsive layout
- **JavaScript (ES6+)**: Dynamic functionality and API integration
- **OpenWeatherMap API**: Real-time weather data source

## Project Structure

```
Weather-App/
├── index.html       # Main HTML file
├── style.css        # Stylesheet
├── script.js        # JavaScript functionality
├── assets/          # Images and icons
│   ├── search.png
│   ├── rain.png
│   ├── humidity.png
│   └── wind.png
└── README.md        # This file
```

## How to Use

1. Open `index.html` in your web browser
2. Enter a city name in the search input field
3. Click the search button or press Enter
4. View the current weather information for the selected city

## Installation

No installation required! Simply clone or download the project and open `index.html` in any modern web browser.

```bash
git clone <repository-url>
cd Weather-App
open index.html
```

## API Key

This project uses the OpenWeatherMap API. The API key is stored in `config.js` (which is ignored by Git) to keep it secure and prevent accidental commits to version control.

### Setup Instructions:
1. Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Create a `config.js` file in the root directory
3. Add your API key to the config file:
   ```javascript
   const config = {
       apiKey: "YOUR_API_KEY_HERE"
   };
   export default config;
   ```
4. The `config.js` file is automatically ignored by Git (see `.gitignore`)

**Important**: Never commit `config.js` to your repository. The API key will be visible in browser developer tools, but keeping it out of version control prevents accidental exposure.

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with ES6 support

## Features Included

✅ City search functionality  
✅ Real-time temperature display  
✅ Humidity monitoring  
✅ Wind speed information  
✅ Responsive design  
✅ Clean and modern interface  

## Future Enhancements

- [ ] Add hourly forecast
- [ ] Add 5-day weather forecast
- [ ] Support for multiple temperature units (Fahrenheit, Kelvin)
- [ ] Weather alerts and notifications
- [ ] Geolocation support
- [ ] Save favorite cities
- [ ] Dark/Light theme toggle

## License

This project is open source and available under the MIT License.

## Author

Ruturaj Powar.

---

**Enjoy checking the weather! 🌤️**
