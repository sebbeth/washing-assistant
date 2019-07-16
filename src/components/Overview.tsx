import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from 'react';


export interface IOverviewProps {

}

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: "2rem",
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	control: {
		padding: theme.spacing(2),
	},
}));

const Overview: React.FC<IOverviewProps> = (props) => {

	const classes = useStyles();

	return (
		<div>
			<Grid container className={classes.root} spacing={2}>
				<Grid item xs={3}></Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<Typography variant="h3" component="h2">Should I hang washing now:</Typography>
						<Typography variant="h3" component="h2">No</Typography>
					</Paper>
				</Grid>
				<Grid item xs={3}></Grid>
				<Grid item xs={3}></Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<Typography variant="h3" component="h2">Should I hang washing now:</Typography>
						<Typography variant="h3" component="h2">No</Typography>
					</Paper>
				</Grid>
				<Grid item xs={3}></Grid>
			</Grid>
		</div>
	);
}

export default Overview;