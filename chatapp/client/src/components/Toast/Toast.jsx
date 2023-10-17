import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Message() {
	const notify = () => { toast("Login Successfully", { position: toast.POSITION.TOP_CENTER}); }
	useEffect(() => {
		notify();
	}, []);
	return (
		<div>
			<ToastContainer />
		</div>
	);
}
export default Message;