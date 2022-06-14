import type { NextPage } from 'next'
import LandingPage from '../components/LandingPage'
import Profile from '../components/Profile'

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
		<Profile />
		{/* <LandingPage /> */}
	</div>
  )
}

export default Home
