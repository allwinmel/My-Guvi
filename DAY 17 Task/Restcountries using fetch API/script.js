async function fetchdata() {
  let response = await fetch("https://restcountries.com/v3.1/all");
  let data = await response.json();
  return data;
}

async function weatherData(cityName) {
  let apiKey = "8b973bd34aa2e73ac4742be2bd31c654";
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`,
  );
  let data = await response.json();
  return data;
}


async function createCard(country) {
  let name = country.name.common;
  let capital = country.capital;
  let region = country.region;
  let latitude = country.latlng[0];
  let longitude = country.latlng[1];
  let countryCode = country.cca3;
  let flag = country.flags.png;

  const colDiv = document.createElement("div");
  colDiv.className =
    "col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-4 mb-3 justify-content-center";
  const card = document.createElement("div");
  card.className = "card h-100";
  card.style.backgroundImage = 'url("https://images.theconversation.com/files/232705/original/file-20180820-30593-1nxanpj.jpg")';
  card.style.backgroundSize = "100%";
  card.style.backgroundRepeat = "repeat";
  card.style.color="black";
  
  
  const cardHeader = document.createElement("div");
  cardHeader.className =
    "card-header text-white bg-primary text-center fs-3";
  cardHeader.textContent = name;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body text-center fs-4 fw-bold";

  const cardImg = document.createElement("img");
  cardImg.className = "card-img-top";
  cardImg.setAttribute("style", "height:8rem;width:12rem ; border:2px solid black");
  cardImg.src = flag;
  cardImg.alt = "flag";

  const details = document.createElement("div");
  details.className = "card-text fs-5 mt-3";
  details.innerHTML = `Capital : ${capital}<br>------------------------<br>Region : ${region}<br>------------------------<br>Latitude : ${latitude}, Longitude : ${longitude}<br>------------------------<br>Country code : ${countryCode}<br>`;

  const button = document.createElement("button");
  button.className = "btn btn-primary mt-3 fs-5 fw-bold";
  button.textContent = "Click for Weather";
  button.onclick = async function () {
    let w_data = await weatherData(capital);
    let temp = w_data.main.temp;
    let pressure = w_data.main.pressure;
    let humidity = w_data.main.humidity;
    let w_speed = w_data.wind.speed;

    const weatherAlert = document.createElement("div");
    weatherAlert.className = "alert alert-light text-dark mt-3";
    const head = document.createElement("h3");
    head.textContent = "Weather Details";
    const list = document.createElement("p");
    list.innerHTML = `Temperature : ${
      temp - 273.15
    }&deg;C<br>Pressure : ${pressure}mb<br>Humidity : ${humidity}%<br>Wind Speed : ${w_speed}km/h<br>`;

    const button1 = document.createElement("button");
    button1.className = "btn btn-primary mt-2";
    button1.textContent = "Go Back";
    button1.onclick = function () {
      cardBody.removeChild(weatherAlert);
      cardBody.append(cardImg, details);
    };

    weatherAlert.append(head, list, button1);
    cardBody.removeChild(details);
    cardBody.removeChild(cardImg);
    cardBody.appendChild(weatherAlert);
  };

  colDiv.appendChild(card);
  card.append(cardHeader, cardBody);
  cardBody.append(cardImg, details);
  details.appendChild(button);

  return colDiv;
}

async function createCards() {
  const container = document.getElementById("container");
  const cardRow = document.getElementById("cardRow");

  const content = await fetchdata();
  for (let country of content) {
    const card = await createCard(country);
    cardRow.appendChild(card);
  }
}

createCards();