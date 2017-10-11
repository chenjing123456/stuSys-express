var express = require('express');

let route = express.Router();
let studentDB = require('../db/studentDB');
let Student = require('./../model/student');

route.get('/findAll',(req,resp)=>{
	studentDB.findAll().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	})
	
})

route.get('/findById',(req,resp)=>{
	console.log(req.query);
	studentDB.findById(req.query.id).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	})
})

route.get('/query/:keys',(req,resp)=>{
	studentDB.query(req.params.keys).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	})
})


route.post('/save',(req,resp)=>{
	let student = new Student();
	Object.assign(student,req.body);
	studentDB.save(student).then((data)=>{
		resp.send(data);
		console.log(data);
	}).catch((err)=>{
		resp.send(err);
	})
})

route.post('/update',(req,resp)=>{
	let student = new Student();
	Object.assign(student,req.body);
	studentDB.update(student).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	})
})

route.post('/batchDelete',(req,resp)=>{
	console.log(req.body);
	studentDB.batchDelete(req.body).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	})
})

module.exports = route;
