const connection = require('./index');  // == module.exports 
//if you exports.connection = connection, then db = require('./index').connection

//Function to return all grocery
const getAll = function(cb) {  //callback because of asychronous nature of get request
 var queryStr = 'SELECT * FROM groceries';
 connection.query(queryStr, (err, data) => {
 	if (err) {
 		console.log("error")
 		cb(err)
 		return;
 	}
 	cb(null, data);
 });
 //or you can do the following:
 //db.query('SELECT * FROM groceries', cb); if there are no error
}


//function to adds an item to the list 
const add = function(name, quantity, cb) {
 var queryStr = `INSERT into groceries(name, quantity) VALUES(?,?)`;
 connection.query(queryStr, [name,quantity], cb);
};

// add('koffee', 1, (err, data) => {
// 	if (err) {
// 	  return console.log("error adding to list");
// 	} 
// 	getAll((err, data) => console.log(err ? err: data));
// })

module.exports.getAll = getAll; ///getAll on the right side is referring to actual function
module.exports.add = add;

