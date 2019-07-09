import React from 'react';
import DataService from '../services/DataService';
import { LineChart, Line , Tooltip, CartesianGrid, XAxis, YAxis, Legend} from 'recharts';
import { WeatherForcast } from '../models/WeatherForcast';

export interface IGraphProps {

    data: WeatherForcast[]
}

export interface IGraphState {

}

export default class Graph extends React.Component<IGraphProps, IGraphState> {

    constructor(props: IGraphProps,state: IGraphState) {
        super(props);
    }


    render() {
        const { data } = this.props;
        
        return(
            <div>
                <LineChart
                    width={1000}
                    height={600}
                    data={data}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="timestamp"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="humidity" stroke="#1c7324" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="cloudiness" stroke="#2a2b2b" />
                    <Line type="monotone" dataKey="windSpeed" stroke="#7a1c77" />
                    <Line type="monotone" dataKey="maxTemp" stroke="#bd2826" />
                    <Line type="monotone" dataKey="minTemp" stroke="#232dc2" />

                </LineChart>
            </div>
            );
    }
}