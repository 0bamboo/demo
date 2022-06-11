import { Button } from "@mui/material";
import { NextPage } from "next";
import classes from "../styles/LandingPage.module.css"

export default function LandingPage() {

	return (
		<div className={classes.container}>
			<div className={classes.leftSide}>
				<div className={classes.ppLogo}>
				</div>
			</div>
			<div className={classes.rightSide}>
				<div className={classes.login}>
					<Button className={classes.Button}>Login</Button>
				</div>
			</div>
		</div>
	);
}