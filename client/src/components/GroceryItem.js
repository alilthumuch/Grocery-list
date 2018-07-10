import React from 'react';

var GroceryItem = (props) => {
	return (
	<div> 
		<span>{props.item.name} </span>
		<span>{props.item.quantity}</span>
	</div>
	)
}

export default GroceryItem;