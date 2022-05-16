import React from 'react';
import { useParams } from 'react-router-dom';

export default function Userinfo(params) {
	const {i} = useParams();
	return(
		<>
			this is user details: {i}
		</>
	)
};
