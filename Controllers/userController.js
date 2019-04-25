let users=require('../users');
var fs = require("fs");
let userValidator=require('./userValidator');

let getUser=(res)=>{
	let usersData=JSON.stringify(users);
	res.send(usersData);
}

let addUser=(user,res)=>{
	if(userValidator.validate(user)){
		let newId=userValidator.findID(users)+1;
		user.id=newId;
		users.push(user);
		console.log(users);
	let usersData=JSON.stringify(users);
		fs.writeFile("users.js", "module.exports="+usersData, (err) => {
  								if (err) console.log(err);
  									console.log("Successfully Written to File.");
								});
		res.send("success");
	}
	else
		res.status("500").send("user exist");
}

let deleteUser=(id,res)=>{
	let filteredUser=users.filter(item=>{
		if(item.id!==id){
			return item;
		}
	});
	let usersData=JSON.stringify(filteredUser);
	console.log(filteredUser);
		fs.writeFile("users.js", "module.exports="+usersData, (err) => {
  								if (err) console.log(err);
  									console.log("Successfully Written to File.");
								});
	res.send(usersData);
}

module.exports={
	getUser,
	addUser,
	deleteUser
}