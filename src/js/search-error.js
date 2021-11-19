import { Notify } from 'notiflix/build/notiflix-notify-aio';
import cleaningMarkupOfContainer from './cleaning-container';


export default function searchError(error) {

    console.log("~ error", error);
    Notify.failure("Oops, there is no country with that name");
    cleaningMarkupOfContainer();

}