	const products = [
	{
		name: "Caramel Vanilla Coffee",
		price: 6.20,
		image: "coffee_01",
		category_id: 1,
		description: "A delicious blend of smooth caramel and creamy vanilla flavors, combined with rich and aromatic coffee.",
		id: 1
	},
	{
		name: "Iced Mocha Coffee",
		price: 5.50,
		image: "coffee_02",
		description: "A refreshing and indulgent beverage that combines the rich flavors of coffee and chocolate.",
		category_id: 1,
		id: 2
	},
	{
		name: "Iced Coffe Latte",
		price: 5.87,
		image: "coffee_03",
		description: "A refreshing and creamy beverage made with espresso, milk, and ice.",
		category_id: 1,
		id: 3
	},
	{
		name: "Large Iced Mocha Coffee",
		price: 6.80,
		image: "coffee_04",
		description: "A refreshing and indulgent beverage that combines the rich flavors of chocolate and coffee.",
		category_id: 1,
		id: 4
	},
	{
		name: "Large Hot Chocolate Cappuccino",
		price: 5.90,
		image: "coffee_05",
		description: "A rich and creamy beverage that combines the indulgent flavors of hot chocolate with the frothy texture of a cappuccino.",
		category_id: 1,
		id: 5
	},
	{
		name: "Small Iced Coffee With Cocoa And Mocha",
		price: 8.20,
		image: "coffee_06",
		description: "A refreshing beverage that combines the rich flavors of cocoa and mocha with the smoothness of iced coffee.",
		category_id: 1,
		id: 6
	},
	{
		name: "Large Hot Coffee With Mocha and Chocolate",
		price: 9.40,
		image: "coffee_07",
		description: "A delicious blend of hot coffee infused with rich mocha and indulgent chocolate.",
		category_id: 1,
		id: 7
	},
	{
		name: "Large Hot Cappuccino",
		price: 7.99,
		image: "coffee_08",
		description: "A rich and creamy coffee beverage made with a perfect balance of espresso, steamed milk, and a velvety layer of frothed milk on top.",
		category_id: 1,
		id: 8
	},
	{
		name: "Medium Iced Mocha Coffee",
		price: 6.35,
		image: "coffee_09",
		category_id: 1,
		description: "A refreshing and indulgent beverage that combines the rich flavors of coffee, chocolate, and milk.",
		id: 9
	},
	{
		name: "Medium Iced Caramel Mocha Coffee",
		price: 7.20,
		image: "coffee_10",
		category_id: 1,
		description: "a delicious and refreshing beverage that combines the rich flavors of caramel, chocolate, and coffee.",
		id: 10
	},
	{
		name: "Caffè Americano Hot",
		price: 3.20,
		image: "coffee_11",
		category_id: 1,
		description: "The caffè americano hot is a classic coffee beverage made by combining espresso shots with hot water.",
		id: 11
	},
	{
		name: "Iced Espresso",
		price: 5.45,
		image: "coffee_12",
		category_id: 1,
		description: "A refreshing and invigorating beverage made by combining espresso shots with ice and optionally adding milk or sweeteners.",
		id: 12
	},
	{
		name: "Iced Coffee With Vanilla Ice Cream And Mocha",
		price: 8.50,
		image: "coffee_13",
		category_id: 1,
		description: "A refreshing and indulgent beverage that combines the smoothness of vanilla ice cream with the rich flavor of mocha.",
		id: 13
	},
	{
		name: "Hot Large Cappuccino Espresso",
		price: 8.99,
		image: "coffee_14",
		category_id: 1,
		description: "A hot, large cappuccino espresso, perfect for coffee lovers seeking a rich and indulgent experience.",
		id: 14
	},
	{
		name: "Chocolate Donuts (3 pieces)",
		price: 7.79,
		image: "donut_01",
		category_id: 4,
		description: "A delicious treat made with a rich chocolate-flavored dough. This set includes three freshly baked donuts.",
		id: 15
	},
	{
		name: "Glazed Donuts (3 pieces)",
		price: 7.79,
		image: "donut_02",
		category_id: 4,
		description: "A delicious assortment of three freshly baked donuts with a sweet and sticky glaze. This set includes three freshly baked donuts.",
		id: 16
	},
	{
		name: "Strawberry Donut",
		price: 2.99,
		image: "donut_03",
		category_id: 4,
		description: "A sweet pastry made with a fluffy dough that is fried until golden brown. It is filled with a creamy strawberry-flavored filling and topped with a pink glaze made from strawberry icing.",
		id: 17
	},
	{
		name: "White Chocolate Donut with Chocolate Cookie",
		price: 2.99,
		image: "donut_04",
		category_id: 4,
		description: "A delectable treat that combines the smooth and creamy taste of white chocolate with the rich and indulgent flavor of a chocolate cookie.",
		id: 18
	},
	{
		name: "Glazed Donut With Strawberry Flavor Chips",
		price: 2.99,
		image: "donut_05",
		category_id: 4,
		description: "A delicious glazed donut with the added delight of strawberry flavor chips.",
		id: 19
	},
	{
		name: "Glazed White Chocolate Donut With Chocolate Cookie",
		price: 2.99,
		image: "donut_06",
		category_id: 4,
		description: "This delectable treat features a fluffy donut with a sweet and creamy white chocolate glaze, topped with a rich and crunchy chocolate cookie.",
		id: 20
	},
	{
		name: "Chocolate Multi-Colored Button-Shaped Chocolate Donut",
		price: 2.99,
		image: "donut_07",
		category_id: 4,
		description: "A delicious treat that combines the rich flavor of chocolate with a fun and colorful design.",
		id: 21
	},
	{
		name: "Chocolate Multi-Colored Button-Shaped Chocolate Donut (3 pieces)",
		price: 7.79,
		image: "donut_08",
		category_id: 4,
		description: "A delicious treat that combines the rich flavor of chocolate with a fun and colorful design.",
		id: 22
	},
	{
		name: "Chocolate Almond Donut (3 pieces)",
		price: 8.50,
		image: "donut_09",
		category_id: 4,
		description: "A delicious pastry made with chocolate-flavored dough and topped with a generous amount of almond slices. This product comes in a pack of three pieces.",
		id: 23
	},
	{
		name: "Mix-up Donuts (6 Pieces)",
		price: 11.69,
		image: "donut_10",
		category_id: 4,
		description: "A delicious assortment of six different flavored donuts. Each donut is uniquely crafted with a variety of flavors.This product comes in a pack of six pieces.",
		id: 24
	},
	{
		name: "Mix-up Donuts (3 Pieces)",
		price: 8.20,
		image: "donut_11",
		category_id: 4,
		description: "A delicious assortment of six different flavored donuts. Each donut is uniquely crafted with a variety of flavors.This product comes in a pack of three pieces.",
		id: 25
	},
	{
		name: "Caramel Vanilla Donut",
		price: 2.99,
		image: "donut_12",
		category_id: 4,
		description: "A delightful treat that combines the rich flavors of caramel and vanilla in a fluffy and fried donut.",
		id: 26
	},
	{
		name: "Chocolate Frosted Vanilla Donut (3 pieces)",
		price: 7.79,
		image: "donut_13",
		category_id: 4,
		description: "A delicious pastry made with a vanilla-flavored dough and topped with a rich chocolate frosting. This product comes in a pack of three pieces",
		id: 27
	},
	{
		name: "Chocolate Coconut Donut",
		price: 3.10,
		image: "donut_14",
		category_id: 4,
		description: "A delicious pastry made with a chocolate-flavored dough and topped with a generous amount of shredded coconut.",
		id: 28
	},
	{
		name: "Chocolate Cookie Package",
		price: 7.20,
		image: "cookie_01",
		category_id: 6,
		description: "A delightful treat that combines the rich flavors of chocolate and the satisfying crunch of a cookie.",
		id: 29
	},
	{
		name: "Chocolate Oatmeal Cookie Package",
		price: 12.70,
		image: "cookie_02",
		category_id: 6,
		description: "A delicious and convenient treat that combines the rich flavor of chocolate with the wholesome goodness of oatmeal.",
		id: 30
	},
	{
		name: "Butter Cookie Package",
		price: 14.49,
		image: "cookie_03",
		category_id: 6,
		description: "A delicious assortment of buttery and melt-in-your-mouth cookies.",
		id: 31
	},
	{
		name: "Oatmeal Cookie Package",
		price: 10.29,
		image: "cookie_04",
		category_id: 6,
		description: "A perfect blend of chewy oats and delicious flavors.",
		id: 32
	},
	{
		name: "Mix-up Butter Cookie Package",
		price: 14.49,
		image: "cookie_05",
		category_id: 6,
		description: "This delectable collection offers a medley of buttery goodness, with a variety of flavors to satisfy every palate.",
		id: 33
	},
	{
		name: "Fruit-flavored Cookie Package",
		price: 13.39,
		image: "cookie_06",
		category_id: 6,
		description: "A product catalog entry that describes a package of cookies with a fruity flavor.",
		id: 34
	},
	{
		name: "Classic Cheese Burger",
		price: 4.29,
		image: "burger_01",
		category_id: 2,
		description: "A juicy beef patty, melted cheese, fresh lettuce, ripe tomatoes, and tangy pickles, all sandwiched between a soft and toasted bun.",
		id: 35
	},
	{
		name: "Chicken Burger",
		price: 4.99,
		image: "burger_02",
		category_id: 2,
		description: "A delicious sandwich made with a grilled or breaded chicken patty, served on a bun with various toppings and condiments. ",
		id: 36
	},
	{
		name: "Chicken Burger With Barbecue Sauce",
		price: 5.29,
		image: "burger_03",
		category_id: 2,
		description: "A delicious chicken burger topped with tangy barbecue sauce, perfect for satisfying your cravings.",
		id: 37
	},
	{
		name: "American Burger",
		price: 4.99,
		image: "burger_04",
		category_id: 2,
		description: "A delicious and classic burger that captures the essence of American cuisine. It features a juicy beef patty, topped with melted cheese, crispy lettuce, ripe tomatoes, and tangy pickles, all sandwiched between a soft and toasted bun.",
		id: 38
	},
	{
		name: "American Bacon Burger",
		price: 5.50,
		image: "burger_05",
		category_id: 2,
		description: "A delicious and savory burger that combines the classic flavors of American cheese, crispy bacon, and a juicy beef patty.",
		id: 39
	},
	{
		name: "Double Cheese Burger",
		price: 6.99,
		image: "burger_06",
		category_id: 2,
		description: "A delicious and indulgent burger made with two beef patties, melted cheese, and a variety of toppings.",
		id: 40
	},
	{
		name: "Cheese Pay (4 pieces)",
		price: 14.69,
		image: "delight_01",
		category_id: 5,
		description: "A delectable treat consisting of four pieces. It is a perfect addition to any dessert menu, offering a rich and creamy cheese filling encased in a flaky pastry crust.",
		id: 43
	},
	{
		name: "Waffle Jam Special",
		price: 9.99,
		image: "delight_02",
		category_id: 5,
		description: "A delicious and indulgent treat that combines fluffy waffles with a generous serving of sweet and tangy jam.",
		id: 44
	},
	{
		name: "Classic French Croissant",
		price: 7.55,
		image: "delight_03",
		category_id: 5,
		description: "A buttery and flaky pastry that originated in France. It is made with layers of dough that are folded and rolled multiple times to create a light and airy texture.",
		id: 45
	},
	{
		name: "Cheese Pay",
		price: 6.25,
		image: "delight_04",
		category_id: 5,
		description: "A delectable treat consisting of four pieces. It is a perfect addition to any dessert menu, offering a rich and creamy cheese filling encased in a flaky pastry crust.",
		id: 46
	},
	{
		name: "Almond Chocolate Milk Cake",
		price: 8.25,
		image: "delight_05",
		category_id: 5,
		description: "A delectable dessert made with rich chocolate cake infused with almond flavor and moistened with creamy chocolate milk.",
		id: 47
	},
	{
		name: "Chocolate Milk Cake",
		price: 7.25,
		image: "delight_06",
		category_id: 5,
		description: "Indulge in the rich and creamy goodness of our Chocolate Milk Cake. Made with the finest ingredients, this decadent cake is moist, fluffy, and infused with the irresistible flavor of chocolate.",
		id: 48
	},
	{
		name: "Mexican Pizza",
		price: 17.99,
		image: "pizza_01",
		category_id: 3,
		description: "A crispy tortilla base topped with seasoned ground beef, refried beans, melted cheese, and a variety of flavorful toppings such as tomatoes, onions, jalapenos, and cilantro. ",
		id: 49
	},
	{
		name: "Cheese Ham Pizza",
		price: 19.29,
		image: "pizza_02",
		category_id: 3,
		description: "Indulge in the perfect combination of savory ham and melted cheese with our Cheese Ham Pizza.",
		id: 50
	},
	{
		name: "Four Cheese Pizza",
		price: 19.89,
		image: "pizza_03",
		category_id: 3,
		description: "A delicious and indulgent pizza topped with a blend of four different types of cheese. It combines the rich and creamy flavors of mozzarella, cheddar, Parmesan, and Gorgonzola to create a mouthwatering experience.",
		id: 51
	},
	{
		name: "Bacon Mushroom Pizza",
		price: 20.29,
		image: "pizza_04",
		category_id: 3,
		description: "A delicious combination of crispy bacon and savory mushrooms on a thin crust, topped with melted cheese and a tangy tomato sauce.",
		id: 52
	},
	{
		name: "Mexican Chorizo Pizza",
		price: 19.49,
		image: "pizza_05",
		category_id: 3,
		description: "A thin and crispy crust topped with spicy Mexican chorizo, melted cheese, tangy tomato sauce, and a medley of fresh vegetables.",
		id: 53
	},
	{
		name: "Hawaiian Pizza",
		price: 17.99,
		image: "pizza_06",
		category_id: 3,
		description: "It features a classic pizza crust topped with tomato sauce, mozzarella cheese, diced ham, and chunks of pineapple.",
		id: 54
	},
	{
		name: "Bacon Onion Pizza",
		price: 20.99,
		image: "pizza_07",
		category_id: 3,
		description: "Indulge in the perfect combination of smoky bacon and caramelized onions with our Bacon Onion Pizza.",
		id: 55
	},
	{
		name: "Veggie Pizza",
		price: 17.99,
		image: "pizza_08",
		category_id: 3,
		description: "A delicious and healthy pizza option topped with a variety of fresh vegetables, including bell peppers, onions, mushrooms, and olives.",
		id: 56
	},
	{
		name: "Pepperoni Pizza",
		price: 16.19,
		image: "pizza_09",
		category_id: 3,
		description: "A thin and crispy crust topped with zesty tomato sauce, a generous amount of mozzarella cheese, and savory slices of pepperoni.",
		id: 57
	},
	{
		name: "Caramelized Onion And Olive Pizza",
		price: 21.79,
		image: "pizza_10",
		category_id: 3,
		description: "A delicious and savory pizza topped with caramelized onions and a generous amount of olives.",
		id: 58
	},
]

export {
	products
}