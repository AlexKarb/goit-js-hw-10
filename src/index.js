import './css/styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import cleaningMarkupOfContainer from './js/cleaning-container';
import drowTheFoundCountries from './js/draw-the-found-countries';
import searchError from './js/search-error';

const DEBOUNCE_DELAY = 300;
const searchInput = document.querySelector('#search-box');



searchInput.addEventListener('input', debounce(event => {
    event.preventDefault();
    let userInputValue = searchInput.value.trim();

    if (userInputValue) {
        return fetchCountries(userInputValue).then(drowTheFoundCountries).catch(searchError)
    };

    cleaningMarkupOfContainer()

}, DEBOUNCE_DELAY));





