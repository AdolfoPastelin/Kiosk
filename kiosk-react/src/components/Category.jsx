import { useKiosk } from "../hooks/useKiosk"
import { PropTypes } from "prop-types"

export default function Category({ category }) {
	const { name, icon, id } = category
	const { handleClickCurrentCategory, currentCategory } = useKiosk()

	const highlightCurrentCategory = () => {
		return currentCategory.id === id
			? 'bg-gray-700 text-white dark:bg-yellow-500 dark:text-black'
			: 'bg-transparent'
	}

	return (
		<button
			onClick={() => handleClickCurrentCategory(id)}
			className={`${highlightCurrentCategory()} mx-auto w-48 h-14 border-2 cursor-pointer shadow-md border-gray-300 hover:bg-gray-700 hover:text-white dark:border-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-black`}
		>
			<div className="flex gap-5 justify-center">
				<li>
					<img src={`../../img/${icon}_icon.svg`} alt={`${icon} icon`} className="w-10" />
				</li>
				<li className="my-auto">{name}</li>
			</div>
		</button>
	)
}

Category.propTypes = {
	category: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		icon: PropTypes.string
	})
}