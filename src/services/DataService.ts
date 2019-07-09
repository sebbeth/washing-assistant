import { WeatherForcast } from "../models/WeatherForcast";
import { WeatherLocation } from "../models/WeatherLocation";

export default class DataService {


	public async getWeatherData(latitude: string, longitude: string) {

		const appId = "da1a78b9baa36453d65e754683982522";
		// Current weather query `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appId}&units=metric`;
		const query = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${appId}&units=metric`;

		const output: WeatherForcast[] = [];
		try {
			const response = await fetch(query);
			let json = await response.json();
			const location = new WeatherLocation(json.city);
			json.list.map((item: any) => {
				const day: WeatherForcast = new WeatherForcast(item);
				output.push(day);
			});
			console.log(location);
			console.log(json);
			
		} catch (error) {
			console.error(error);
		}
		console.log(output);
		
		return output;

	}
}