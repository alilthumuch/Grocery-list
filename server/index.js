
//serve static assets

//parse the body on post request

//define routes for resource /groceries
//GET /groceries
///user the methods on grocery.js in db to get request

//POST /groceries
///client send post data via the body in post request
///this comes in chunks..so you gotta ressamble it back 

const Grocery = require('../db/Grocery');
console.log(Grocery)
const path = require('path');
const express = require('express');
const app = express(); //create instance of server

//for every request that comes in, going to log path and method
app.use(function(req, res, next) {
	console.log(req.method, req.path);
	next();
});

//check every incoming rquest and its first it's going to check if the path matches the incoming request
app.use(express.static(path.join(__dirname, '../client/dist')));  //.. is up and / is out.

//parse the body on post req
const bodyParser = require(`body-parser`); //body parser takes incoming message and parsing it
app.use(bodyParser.json()); //this chunks up body and attach body property (the req.body used in POST)

app.get('/groceries', (req, res) => { //??????? /groceries?
	Grocery.getAll((err, groceries) =>{
		if (err) {
			res.status(500).send(err);
		} else {
			res.json(groceries);//json stringify it so you can send it //same as res.send?
		}
	})
})

app.post('/groceries', (req, res) => {
	console.log("POSTTTT")
	if(!req.body.quantity){
		res.status(400).send({message: 'You didnt say how many'});
	}
	Grocery.add(req.body.name, req.body.quantity, (err,result) => {
		if (err){
			return res.status(500).send(err);
		} else {
			res.sendStatus(201);
		}
	});
});


app.listen(3000, function () {
	console.log("App listening to port 3000!")
});