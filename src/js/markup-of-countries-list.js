
export default function createMarkupOfCountriesList(countries, selector) {
    
const container = document.querySelector(selector);

    return container.innerHTML = countries.map(({name, flags}) =>
        `<li class="country-list__item">
        <img class="country-list__flag"
            src="${flags.svg}" 
            alt="${name.official}"
            width="30">                            
        ${name.official}</li>`)
        .join("");
}
