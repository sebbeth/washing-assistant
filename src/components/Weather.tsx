import React from 'react';
import DataService from '../services/DataService';
import { WeatherForcast } from '../models/WeatherForcast';
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
		this.state = {data: []};
		this.getData();

	}


	public render() {
		
		const data = [
			{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
			{name: 'Page B', uv: 800, pv: 2700, amt: 2400},
			{name: 'Page B', uv: 1200, pv: 2900, amt: 2400},
		];

		const data2 = [
			{val: 30},
			{val: 40},
			{val: 50}
		];

		
		return (
			<div style={{padding: "3rem"}} ><h1>Drying Assistant</h1>
			<span>A tool for predicting when to put washing out</span>
			<Graph data={this.state.data}/>
			
			</div>
		);
	}

	public async getData() {
		this.setState(
			{data: await this.dataService.getWeatherData("-32.873194","151.690054")}
		);
		//this.weatherForcast = await this.dataService.getWeatherData("-32.873194","151.690054");
	}


}