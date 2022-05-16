import React from 'react';

export default function Addmat(params) {
	let {usersArray, setUsersArray} = params;
	let [username, setUsername] = React.useState("");
	let [item, setItem] = React.useState("");

	let handleUsername = (e) =>{
		setUsername(e.target.value);
	}
	let handleItem = (e) =>{
		setItem(e.target.value);
	}
	let submitForm = (e) =>{
		e.preventDefault();
		let getU = usersArray.map((each,i)=>each.username === username ? {...each, items:[...each.items, item]}:each );
		setUsersArray(getU);
		setUsername("");
		setItem("");
		
	}
	return(
		<>
			<div className="col-12 col-md-4 m-auto">
				<form className="small" onSubmit={submitForm}>
					<div className="form-group">
						<label>Username</label>
						<input onChange={handleUsername} value={username} className="form-control" type="text"/>
					</div>
					<div className="form-group">
						<label>Item</label>
						<input onChange={handleItem} value={item} className="form-control" type="text"/>
					</div>
					<button type="submit" className="btn btn-outline-primary btn-block">Submit</button>
					</form>
			</div>
		</>

	)
};
