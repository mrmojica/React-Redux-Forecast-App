//using redux to make API request.

//we require axios to make ajax requests similar to using jquery.
import axios from 'axios';

//forecast API key
const API_KEY = '62c31a2c44966d0dfab3813437ee5abe';
//querystring begins after the ?
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


//we set the type to a variable to avoid typo errors (action and reducers will be referenceing the action type variable)
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	//user api docs for reference to set url (we set us as default country).
	const url =`${ROOT_URL}&q=${city},us`;
console.log(url);
	//axios returns a promise 'request'
	const request = axios.get(url);

//the data comes as a promise but hits the middleware redux-promise and gets converted before hitting the reducer_weather, check console for example.
	console.log('Request:', request);

	return {
		type: FETCH_WEATHER,
		//payload can refer as an option property that goes with action of data refered to the paticular action
		payload: request

	};

}