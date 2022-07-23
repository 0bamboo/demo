

import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {useState} from "react";
import Image from "next/image"
import intra from "../public/42.jpg"


type EditModalProps = {
	closeModal: (t:boolean) => void;
}

const EditModal:React.FC<EditModalProps> = ({closeModal}) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
	  setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
	  setAnchorEl(null);
	};
	return (
		<>
			<div className="overlay-modal" onClick={() => closeModal(false)} />
			<div className="edit-modal">
				<div className="modal-picture">
					hatata
				</div>
				<div className="modal-data">
					<div className="user-name"> username </div>
					<div className="two-factor"> two factor</div>
				</div>
				<div className="modal-buttons">
					<button onClick={() => closeModal(false)}>Cancel</button>
				</div>
			</div>
		</>
	)
}

export default EditModal