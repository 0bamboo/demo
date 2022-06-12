import { Button } from '@mui/material'
import type { NextPage } from 'next'
import classes from "../styles/LandingPage.module.css"
import Image from 'next/image'
import pic42 from "../public/42.jpg";
import playerImg from "../public/player1.svg"
import logoImg from "../public/ponglogo.svg"
import LoginIcon from '@mui/icons-material/Login';
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import { Button } from '@mui/material'
// import { createTheme } from '@mui/material'
// import { makeStyles } from '@mui/styles'

// primary color   : rgb(33, 43, 54)
// secondary color : #ff4842 

// const useStyles = makeStyles({
// 	test: {
// 		color: `#ff4842`
// 	},
//   });

// const theme = createTheme({
// 	palette: {
// 	  primary: {
// 		light: '#757ce8',
// 		main: '#3f50b5',
// 		dark: '#002884',
// 		contrastText: '#fff',
// 	  },
// 	  secondary: {
// 		light: '#ff7961',
// 		main: '#f44336',
// 		dark: '#ba000d',
// 		contrastText: '#000',
// 	  },
// 	},
//   });

const Home: NextPage = () => {
  return (
    <div>
		<div className={classes.container}>
			<div className={classes.container__left}>
				<div className={classes.container__up}>
					<div className={classes.div__logo}>
						<Image className={classes.img__logo} src={logoImg} alt="this is the logo" height="80em" width="80em" />
					</div>
					<div className={classes.login__button_1}>
						<Button variant="contained" size="small" startIcon={<LoginIcon />} style={{backgroundColor:"#ff4842 ", borderRadius: "10px", width: "35%", fontSize: "0.7rem"}}>Login</Button>
					</div>
				</div>
				<div className={classes.div__player}>
					<Image className={classes.img__player} src={playerImg} alt="a ping pong player"  layout="fill"/>
				</div>
			</div>
			<div className={classes.container__right}>
				<div className={classes.login}>
					<div className={classes.login__image}>
						<Image className={classes.image__42} src={pic42} alt="A 42 image " objectFit="cover" layout='fill' />
					</div>
					<div className={classes.login__button}>
						<Button variant="contained" size="medium" startIcon={<LoginIcon />} style={{backgroundColor:"#ff4842 ", borderRadius: "12px", width: "35%", fontSize: "1vw"}}>Login</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Home
