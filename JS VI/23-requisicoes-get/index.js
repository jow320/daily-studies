function createCountryCard(country) {
  const card = document.createElement("div");
  card.classList.add("country");

  const name = document.createElement("h2");
  const countryName = country.name.common;
  name.textContent = countryName;

  const flag = document.createElement("img");
  flag.src = country.flags.svg;
  flag.alt = countryName;

  card.append(name, flag);
  document.querySelector("#countries").append(card);
}

async function GetCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();

  countries.forEach(createCountryCard);
}

GetCountries();
