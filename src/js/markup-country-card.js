
export default function createMarkupOfCountryCard(countries, selector) {

    const container = document.querySelector(selector);

    return container.innerHTML = countries.flatMap(({ name, flags, capital, population, languages }) =>
    
        ` <h1> <img style="margin-right:10px;"
            src="${flags.svg}" 
            alt="${name.official}"
            width="40">
        ${name.official}
    </h1>
    <ul class="country-info__list">
        <li class="country_info__item">
            <h2 class="county_info__head">Capital:</h2>
            <p  class="county_info__value">${capital}</p></li>
        <li class="country_info__item">
            <h2 class="county_info__head">Population: </h2>
            <p class="county_info__value">${population}</p>
        </li>
        <li class="country_info__item">
            <h2 class="county_info__head">Languages:</h2>
            <p class="county_info__value">${Object.values(languages).join(", ")}</p>
        </li>
    </ul>` ).join("")
};
