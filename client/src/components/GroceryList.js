import React from 'react';
import GroceryItem from './GroceryItem';

var GroceryList = (props) => {
	return (
		<div className ="groceries">
			{props.list.map(item => 
				<GroceryItem item={item} />
			)}
		</div>
	)
};

export default GroceryList;