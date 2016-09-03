import {FETCH_WEATHER} from '../actions/index';

//this reducer is created to handle the fetchweather action.
//reducer function(state, action);

//we set a state to empty array since we plan to make a list of data
export default function(state=[], action) {

	//shows recieved data after promise middleware kicked in.
	console.log('action received', action);

switch (action.type) {
	case FETCH_WEATHER:
	//data property has the data we care about when looking at the api object data.
		//concat produces a new array version of state that contains the old and new data (we do not want to mutate our original state (do not want to push into the state)).
		//return state.concat([action.payload.data]); ES5, below does the exact same but using ES6 syntax
		return [action.payload.data, ...state];	//[city,city,city] , not city[city,city,city]
}





	return state;
}

//to make sure the reducer is making use we add it to our combineReducer in our index.js