import Image from "next/image";
import classes from "../styles/Profile.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../public/ponglogo.svg"
import { Button, IconButton } from "@mui/material";

const Profile = () => {

	return (
		<div className={classes.parent__container}>
			<div className={classes.sidebar__container}>
				<div className={classes.logo__image}>
					<Image src={logo} alt="logo image" width={80} height={80}></Image>
				</div>
				<IconButton aria-label="menu" size="large" className={classes.menu__button} onClick={() => {alert("MAROUANE TCHAK CHWIYA");}}><MenuIcon fontSize="inherit" style={{color:"white"}} /></IconButton>
			</div>
			<div className={classes.profile__container}>

			</div>
		</div>
	)
}

export default Profile;