import { Notify } from 'notiflix/build/notiflix-notify-aio';
import createCountriesList from './markup-of-countries-list';
import createCountryCard from './markup-country-card';
import cleaningMarkupOfContainer from './cleaning-container';


export default function drowTheFoundCountries(countries) {
        
        const tooManyMatches = countries.length > 9;
        const enoughMatchForList = countries.length > 1 & countries.length < 9;
        const foundMatch = countries.length === 1;
              
    if(tooManyMatches) {
        Notify.info("Too many matches found. Please enter a more specific name.");
        cleaningMarkupOfContainer();       
    };

    if(enoughMatchForList) {
        cleaningMarkupOfContainer();
        createCountriesList(countries, '.country-list');         
    };
            
    if(foundMatch) {
        cleaningMarkupOfContainer();
        createCountryCard(countries, '.country-info');
    };

};



