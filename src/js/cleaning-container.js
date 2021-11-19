export default function cleaningMarkupOfContainer () {


const containerForCountriesList = document.querySelector('.country-info');
const containerForCountryCard = document.querySelector('.country-list');

    if (containerForCountriesList.innerHTML) {
            containerForCountriesList.innerHTML = "";
    };
    
    if (containerForCountryCard.innerHTML) {
            containerForCountryCard.innerHTML = "";
    };

}
