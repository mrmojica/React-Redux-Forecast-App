import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
	//initialize state
	constructor(props) {
		super(props);

		//initial state
		this.state = {term: ''};

		//bundle.js:21615 Uncaught TypeError: Cannot read property 'setState' of undefined
		//To clear the error above we added the code below: this = instance of SearchBar has a function called onInputChange bind that function to this, *searchbar and replace onInputChange with this new bound with this.onInputChange.
		//take existing function bind to this then replace existing function with it (overwriting).
		this.onInputChange = this.onInputChange.bind(this);


		//bundle.js:22406 Uncaught TypeError: Cannot read property 'props' of null
		//to clear null error we add the following code below.
		//when we have a callback that we pass to a DOM/jsx element and makes a reference to 'this' we need to bind the context
		this.onFormSubmit = this.onFormSubmit.bind(this);

		//check developer tools network and forecast -> preview to see request

	}

	onInputChange(event) {
		//console.log(event.target.value);
		this.setState({ term: event.target.value});
		}


	onFormSubmit(event) {
		event.preventDefault();

	//We need to go and fetch weather data
	//we call the action creator and set search term value as the argument
	this.props.fetchWeather(this.state.term);
	//return term state back to empty string once submitted.
	this.setState({term:''});

	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
				placeholder="Get a five-day forecast in your favorite cities"
				className="form-control"
				value={this.state.term}
				onChange={this.onInputChange} />				
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
			);
	}
}


//hook up our action creator fetchweather to our searchbar container
function mapDispatchToProps(dispatch){
	//causes the action creator featchweather to bind action with dispatch to make sure it flows down through our middleware and reducers
	//lets us call this.props.fetchWeather from our action creator
	return bindActionCreators({fetchWeather}, dispatch);

}

//connect(state, dispatch)(component);
//we pass null because when we pass a function we want it to only go in as the second argument and ignore the first arguement that will usually be a state.
export default connect(null, mapDispatchToProps)(SearchBar);




