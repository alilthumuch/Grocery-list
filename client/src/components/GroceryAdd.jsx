import React from 'react';

class GroceryAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			quantity: '',
		}
		 //same as binding on bottom
		// this.HandleQuantityChange = this.handleQuantity.bind(this);
	}

	handleNameChange(event){
		this.setState({
			name: event.target.value
		})
	}

	handleQuantityChange(event){
		this.setState({
			quantity: event.target.value
		})
	}

	handleClick() {
		console.log(this)
		var grocery = {
			name: this.state.name,
			quantity: parseInt(this.state.quantity)
		}
		
		this.props.handleAddGrocery(grocery)
	}

	render() {
		return (
			<div>
			<input type ="text" value = {this.state.name}  onChange={this.handleNameChange.bind(this)}/>
			<input type = "text" value= {this.state.quantity} onChange={this.handleQuantityChange.bind(this)} />
			<button onClick = {this.handleClick.bind(this)}> Add Grocery</button>
			</div>
		)
	}
}

export default GroceryAdd