let addCreatedDate=(req,res,next)=>{
	if(req.method==="POST")
		req.body.date=new Date();
	next();
}
module.exports={
	addCreatedDate
}