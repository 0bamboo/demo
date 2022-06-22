import Image from "next/image"
import img from "../public/abstract.jpeg"


const FriendsCard = () => {
	return (
		<div style={{margin:"0", padding:"0", width:"90%", height:"100%"}}>
			<div className="friends-card">
				<div className="friends-card-img"><Image src={img} alt="img-user" layout="fill"/></div>
				<div className="friends-card-name"><p>name</p></div>
				<div className="friends-card-state"><p>state</p></div>
			</div>
		</div>
	)
}

export default FriendsCard