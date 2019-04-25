let userController=require('../Controllers/userController');

module.exports=(app)=>{
	app.route('/')
	.get((req,res)=>{
		userController.getUser(res);
	})
	.post((req,res)=>{
		userController.addUser(req.body,res);
	})
	.delete((req,res)=>{
		console.log("inside delete block and ID :"+req.query.id);
		let id=parseInt(req.query.id);
		userController.deleteUser(id,res);
	})
	app.get('/about',(req,res)=>{
		res.status(200);
		res.send("this page is created by Abhishek Yadav");
	})
}
