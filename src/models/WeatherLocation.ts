export class WeatherLocation {
    public cityName: string = "";
    public timezone: number = 0;


    constructor(item: any) {
        if (!item) {
            return this;
        }
        this.cityName = item.name;
        this.timezone = item.timezone;
    }}