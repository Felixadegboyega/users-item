import React from 'react';
import { Link } from 'react-router-dom';
// import "./userstyle.css"

export default function Users(params) {
	let {usersArray} = params;
	return(
		<>
			<div className="col-12 p-2">
				<h3>Users</h3>
				{
					usersArray?.map((each, i)=>(
						<div className="border rounded mb-2" key={i}>
							<button className="w-100 btn btn-info shadow-sm text-left btn-block" data-toggle="collapse" data-target={"#"+"id"+i} >{each.username}</button>
							<div className="collapse p-2" id={"id"+i}>
								Full Name: {each.fullname} <br/>
								Email: {each.email} <br/>
								Items: {
									each.items.map((one, j)=>{
										return <span key={j}>{one}&nbsp;</span>
									})
								} <br/>
								Total Number:{each.items.length}<br/>
								<Link class="btn btn-primary" to={`users/${i}`} role="button">Details</Link>
							</div>
						</div>
					))
				}
			</div>
		</>		
	);
	
};
