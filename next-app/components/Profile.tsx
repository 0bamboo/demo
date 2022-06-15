import Image from "next/image";
// import "../styles/Profile.css"
// import '../styles/globals.css'
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../public/ponglogo.svg"
import { Button, IconButton } from "@mui/material";

const Profile = () => {

	return (
		<div className={"parent__container"}>
			<div className={"sidebar__container"}>
				<div className={"logo__image"}>
					<Image src={logo} alt="logo image" width={80} height={80}></Image>
				</div>
				<IconButton aria-label="menu" size="large" className={"menu__button"} onClick={() => {alert("MAROUANE TCHAK CHWIYA");}}><MenuIcon fontSize="inherit" style={{color:"white"}} /></IconButton>
			</div>
			<div className={"profile__container"}>

			</div>
		</div>
	)
}

export default Profile;