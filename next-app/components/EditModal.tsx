import { SetStateAction } from "react"

type EditModalProps = {
	closeModal: (t:boolean) => void;
}

const EditModal:React.FC<EditModalProps> = ({closeModal}) => {
	return (
		<>
			<div className="overlay-modal" onClick={() => closeModal(false)} />
			<div className="edit-modal">
				<div className="modal-container">
					<div className="modal-content">
						<button onClick={() => closeModal(false)}>exit</button>
						<button>save</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default EditModal