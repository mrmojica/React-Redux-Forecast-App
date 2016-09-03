import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


//when adding connect export remove the function export default
class WeatherList extends Component {

	//cityData contains the api weather object. map() will produce one row for each city.
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;
		//array of numbers for temps
		console.log(temps);
		return (
			//Rule set key to the top level element of a react list
			<tr key={cityData.city.name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>			
				<td><Chart data={temps} color='red' units='K' /></td>	
				<td><Chart data={pressure} color='blue' units='hPa' /></td>	
				<td><Chart data={humidities} color='green' units='%' /></td>				
			</tr>


			);
	}


	render() {
		return (
			<table className="table table-hover">
			<thead>
				<tr>
					<th>City</th>
					<th>Temperature (K)</th>
					<th>Pressure (hPa)</th>
					<th>Humidity (%)</th>
				</tr>
			</thead>
			<tbody>
			{this.props.weather.map(this.renderWeather)}
			</tbody>
			</table>

			);
	}
}


function mapStateToProps(state) {
	//we are using state.weather since we assigned our weather reducer to the weather key in the combineReducer
	return {weather: state.weather}	// we can set the parameter {weather} and set the return to {weather} es6 shorter syntax

}

export default connect(mapStateToProps)(WeatherList);