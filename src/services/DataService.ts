export default class DataService {


	public async getWeatherData() {

		const latitude = "35";
		const longitude = "-151";
		const appId = "da1a78b9baa36453d65e754683982522";
		const query = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appId}&units=metric`;

	}
}