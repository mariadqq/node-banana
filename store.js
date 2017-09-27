

var menu = [{name:'bananasplit', price:20}, 
			{name:'spoon', 	price:4},
			{name:'topping', price:5}]

const describeItem = (item) => {
	console.log('Item: '+ item.name + ' Price: '+ item.price)

}
exports.describeMenu = () =>{

	console.log('Describe menu')
	
	for (i =0; i < menu.length; i++) {
		describeItem(menu[i]);
	}

}

exports.greet =() =>{

	console.log('Välkommen!')
}
const counter = (b, s) => {

	console.log('Counter')
	//console.log(20*5+5*3);
	//console.log(bananasplit*b+spoon*s);
}
//greet();
//describeMenu();
//counter(5, 3);
