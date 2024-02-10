<h1>Rest Countries Weather Details</h1>
<p>
This is a web application that displays weather details for various countries using the OpenWeatherMap API. The application fetches data about different countries from the "https://restcountries.com/v3.1/all" endpoint and then retrieves weather information for each country using the OpenWeatherMap API.
</p>
<h3>How It Works</h3>
<p>
The application uses the Bootstrap framework to create a responsive user interface.
Upon loading the page, it fetches country data and weather information for up to 250 countries.
For each country, a card is created displaying the country's name, capital, region, latitude, longitude, and country code. Additionally, the country's flag is shown.
<br>
Users can click on the "Click for Weather" button on each card to view the current weather details, including temperature, pressure, humidity, and wind speed.
<br>
The application is designed to work on both desktop and mobile devices, with responsive card layouts using media queries.
<h3>How to Run</h3>
<p>
To run the application, simply open the "index.html" file in a web browser.
The application will load the weather details for various countries on the page.
</p>
<h3>Note</h3>
<p>
The application may not work correctly if the "https://restcountries.com/v3.1/all" or OpenWeatherMap API endpoints are unavailable or have changed.
The program uses the API key "8b973bd34aa2e73ac4742be2bd31c654" for accessing the OpenWeatherMap API. If this key is invalidated, the weather data retrieval may not work. Ensure the API key is valid before usage.
Feel free to explore weather details for different countries using this web application!
</p>
<p>
This is also deployed in <span style="font-size: large">Netlify</span> The Link is given below,
</p>
https://rest-countries-weather-fetch-guvi.netlify.app/


[![Netlify Status](https://api.netlify.com/api/v1/badges/6c35272a-e8d6-4ffc-ba6c-9b325c4928d1/deploy-status)](https://app.netlify.com/sites/rest-countries-weather-fetch-guvi/deploys)
