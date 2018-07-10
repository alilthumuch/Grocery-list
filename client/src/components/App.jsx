import React from 'react';
import GroceryList from './GroceryList.js';
import GroceryAdd from './GroceryAdd.jsx';

import axios from 'axios';

//const App = () => <div> Hi</div>
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			groceries: [{id:1, name:"blahhh", quantity:5}] 
		}
	}

	componentDidMount() {
		this.getAllGroceries();
	}

	getAllGroceries(){
		axios.get('/groceries') //get ajax request and retrieve data
		  .then(results => this.setState({groceries: results.data})) //then setState groceries to data you get in results
		  .catch(err => console.log('err fetching groceries:', err));
	}

	addGrocery(grocery) {
		console.log('click');
		axios.post('/groceries', grocery)
		.then(results => this.getAllGroceries())
		.catch(err => console.log('err posting grocery', err));
	}

	render(){
		return(
		<div> 
			<GroceryAdd handleAddGrocery = {this.addGrocery.bind(this)}/>
			<h1>Grocery List </h1>
			<GroceryList list = {this.state.groceries}/>
		</div>
		)
	}
};



export default App;