//we create a chart component so we can re-use to display charts instead of repeating ourselves on weather-list container.


import _ from 'lodash';
import React from 'react';
//sparklines is the data, sparklinesline is the config, sparklinesreferenceline reference average or mean (see docs).
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';


function average(data) {
	return _.round(_.sum(data)/data.length);
}

export default (props) => {
	return (
		//we set props.data and props.color so it can be configured when called on weatherlist container.
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type='avg' />
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>

		);
}