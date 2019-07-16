import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { ThemeProvider } from "@material-ui/styles";
import React from 'react';
import './App.css';
import Overview from "./components/Overview";
import Weather from "./components/Weather";



const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#757ce8',
			main: '#3f50b5',
			dark: '#002884',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000',
		},
	},
});

const App: React.FC = () => {




	const [view, setValue] = React.useState(0);

	function handleChange(event, newValue) {
		setValue(newValue);
	}

	return (
		<ThemeProvider theme={theme}>
			<AppBar position="static">
				<Tabs value={view} onChange={handleChange} centered>
					<Tab label="Now" />
					<Tab label="Forcast" />
					<Tab label="Weather Data" />
				</Tabs>
			</AppBar>
			{view === 0 && <Overview />}
			{view === 1 && <div></div>}
			{view === 2 && <Weather />}
		</ThemeProvider>
	);
}

export default App;
