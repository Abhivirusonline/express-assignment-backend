"use strict";
const express=require('express');
const port=4001;
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const router=require('./routes');
const userMiddleware=require('./Middlewares');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(userMiddleware.addCreatedDate);
// server is listening on port
app.listen(port,()=>{
console.info('sever is running at http://localhost:%d',port);
})
router(app);