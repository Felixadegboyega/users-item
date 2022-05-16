import React, {useRef, useState} from 'react';

export default function Add(params) {
	let {usersArray, setUsersArray} = params
	let [fullname, setfullname ] = useState("");
	let [phonenumber, setphonenumber ] = useState("");
	let [email, setemail ] = useState("");
	let [username, setusername ] = useState("");

	let handlefullname = (e) =>{
		setfullname(e.target.value)
	}
	let handlephonenumber = (e) =>{
		setphonenumber(e.target.value)
	}
	let handleemail = (e) =>{
		setemail(e.target.value)
	}
	let handleusername = (e) =>{
		setusername(e.target.value);
	}
	
	let obj = { fullname, phonenumber, email, username, items:[]};
	let submitForm = (e) =>{
		e.preventDefault();
		if(obj.fullname !== "" && obj.phonenumber !== "" && obj.email !== "" && obj.username !== ""){
			for (let j = 0; j < usersArray.length; j++) {
				const element = usersArray[j];
				if(element.username === obj.username){
					alert("Username has been taken")
					return
				}
			};
			let set = [...usersArray, obj]
			localStorage.setItem("usersArray", JSON.stringify(set));
			setUsersArray(set);
			setfullname("");
			setphonenumber("");
			setemail("");
			setusername("");
			console.log(usersArray);
		};
	};

	return(
		<>
			<div className="col-12 col-md-8">
				<form className="small" onSubmit={submitForm}>
					<div className="form-group">
						<label>Full Name</label>
						<input onChange={handlefullname} value={fullname} className="form-control" type="text"/>
					</div>
					<div className="form-group">
						<label>Phone Number</label>
						<input onChange={handlephonenumber} value={phonenumber} className="form-control" type="text"/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input onChange={handleemail} value={email} className="form-control" type="email"/>
					</div>
					<div className="form-group">
						<label>Username</label>
						<input onChange={handleusername} value={username} className="form-control" type="text"/>
					</div>
					<button type="submit" className="btn btn-outline-primary btn-block">Submit</button>
				</form>
			</div>
		</>
	)
};
