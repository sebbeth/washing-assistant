export class WeatherForcast {

    public maxTemp: number = 0;
    public minTemp: number = 0;
    public humidity: number = 0;
    public timestamp: Date = new Date();
    public rainLastThreeHours: number = 0;
    public weatherConditions: string = "";
    public windSpeed: number = 0;
    public cloudiness: number = 0;


    constructor(item: any) {
        if (!item) {
            return this;
        }
        this.maxTemp = item.main.temp_max;
        this.minTemp = item.main.temp_min;
        this.humidity = item.main.humidity;
        this.timestamp = new Date(item.dt * 1000);
        this.rainLastThreeHours = (item.rain != null) ? 1 : 0;
        this.weatherConditions = item.weather[0].main;
        this.windSpeed = item.wind.speed;
        this.cloudiness = item.clouds.all;
    }

}