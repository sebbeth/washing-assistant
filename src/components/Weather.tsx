import React from 'react';
import { WeatherForcast } from '../models/WeatherForcast';
import DataService from '../services/DataService';
import Graph from './Graph';


export interface IWeatherProps {

}

export interface IWeatherState {
	data: WeatherForcast[]
}

export default class Weather extends React.Component<IWeatherProps, IWeatherState> {

	private dataService: DataService = new DataService();
	private weatherForcast: WeatherForcast[] = [];

	constructor(props: IWeatherProps) {
		super(props)
		this.state = { data: [] };
		this.getData();

	}


	public render() {

		return (
			<div style={{ padding: "3rem" }} >
				{/* <h1>Drying Assistant</h1>
			 <span>A tool for predicting when to put washing out</span> */}
				<Graph data={this.state.data} />

			</div >
		);
	}

	public async getData() {
		this.setState(
			{ data: await this.dataService.getWeatherData("-32.873194", "151.690054") }
		);
		//this.weatherForcast = await this.dataService.getWeatherData("-32.873194","151.690054");
	}


}