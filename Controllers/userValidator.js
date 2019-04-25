let users=require('../users.js');
let validate=(users)=>{
if(users.name && users.username && users.email){
	if(isExist(users.username))
		return false;
	else
		return true;
}
else
	return false;
}

let isExist=(username)=>{
	let index=users.findIndex(item=>item.username===username);
	if(index===-1)
		return false;
	else
		return true;
}
let findID=(users)=>{
    let max=0;
    users.map(item=>{
    	if(item.id>max)
    		max=item.id;
    })
    return max;
}
module.exports={
	validate,
	isExist,
	findID
}