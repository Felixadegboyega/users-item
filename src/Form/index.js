import React, {useEffect} from 'react';
import Addmat from './addmat';
import Add from './Adduser';
import Users from './users';
import "./style.css"


export default function FormHome( params ) {
	let [ usersArray, setUsersArray ] = React.useState( [] );

	useEffect( () => {
		if ( localStorage.usersArray === null ) {
			localStorage.setItem( "usersArray", "" );
		}

		if ( localStorage.usersArray ) {
			setUsersArray( JSON.parse( localStorage.getItem( "usersArray" ) ) );
		};
	}, [] )

	return (
		<>
			<div className="container-fluid">
				<div className="row pr-2 pl-2">
					<div className="col-12 bigr col-md-7 mx-auto mt-3 border rounded">
						<div className="row pb-3">
							<Add usersArray={usersArray} setUsersArray={setUsersArray} />
							<Addmat usersArray={usersArray} setUsersArray={setUsersArray} />
							<Users usersArray={usersArray} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
