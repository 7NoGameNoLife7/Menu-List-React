import { useState } from "react";

export interface MenuItemProps {
	itemName: string;
	id: number;
	description: string;
	foodImage: string;
	price: number;
	isFavorite: boolean;
}

function MenuItem({
	id,
	itemName,
	description,
	foodImage,
	price,
	isFavorite,
}: MenuItemProps) {
	const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
	//create a state isFavorite that has the inital value of isFavorite that comes from the props

	return (
		<section className="itemContainer">
			<figure className="imgContainer">
				{/* the image will receive the url src from the props */}
				<img src={foodImage} alt={itemName} />
				<figcaption>
					{/* the h2 will receive the item name from the props */}
					<h2>{itemName}</h2>
					{/* the p will receive the item description from the props */}
					<p>{description}</p>
				</figcaption>
			</figure>
			{/* the span will receive the item price from the props */}
			<aside>{price} EUR</aside>

			{
				/* the button to play with the isFavorite state:
                - onClick, will toggle the isFavorite state,
                - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
            */

				<button
					type="button"
					onClick={() => setIsFavoriteState((prevFav) => !prevFav)}
				>
					{isFavoriteState ? "❤️" : "🖤"}
				</button>
			}
		</section>
	);
}

export default MenuItem;
