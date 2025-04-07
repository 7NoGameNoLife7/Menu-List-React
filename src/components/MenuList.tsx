import MenuItem, { MenuItemProps } from "./MenuItem";

interface FoodItemsProps {
	foodItemsProps: MenuItemProps[];
}

function MenuList({ foodItemsProps }: FoodItemsProps) {
	return (
		<div className="food-items-container">
			{foodItemsProps.map((foodItem) => (
				<MenuItem
					key={foodItem.id}
					id={foodItem.id}
					itemName={foodItem.itemName}
					description={foodItem.description}
					foodImage={foodItem.foodImage}
					price={foodItem.price}
					isFavorite={foodItem.isFavorite}
				/>
			))}
			{/* map through the foodItems array and render a MenuItem component for each element */}
			{/* the key prop is used to give a unique identifier to each element of the foodItems array */}

			{/* render a MenuItem component for each element of the foodItems array */}
		</div>
	);
}

export default MenuList;
