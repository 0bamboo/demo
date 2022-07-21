import { SetStateAction } from "react"
import {Button} from 'antd'
import { DownloadOutlined } from '@ant-design/icons';
import UploadPic from "./UploadPic"

type EditModalProps = {
	closeModal: (t:boolean) => void;
}

const EditModal:React.FC<EditModalProps> = ({closeModal}) => {
	return (
		<>
			<div className="overlay-modal" onClick={() => closeModal(false)} />
			<div className="edit-modal">
				<div className="modal-picture">
					hatata
					<UploadPic />
				</div>
				<div className="modal-data">
					<div className="user-name"> username</div>
					<div className="two-factor"> two factor</div>
				</div>
				<div className="modal-buttons">
					<Button type="primary" shape="circle" size={"large"}icon={<DownloadOutlined />} >Primary </Button>
					<button onClick={() => closeModal(false)}>Cancel</button>
				</div>
			</div>
		</>
	)
}

export default EditModal