import { formatMoney } from '../helpers'
import { useKiosk } from '../hooks/useKiosk'
import PropTypes from 'prop-types'

export default function Product({ product, hasInfoButton = false, buttonIsAvailable = false }) {
	const { id, name, price, image } = product
	const { handleOpenProductModal, handleSetCurrentProduct, handleClickMarkProductAsOutOfStock } = useKiosk()

	return (
		<li className='grid grid-rows-2 rounded-3xl shadow-xl dark:border-b-4 dark:border-yellow-500 dark:shadow-none'>
			<img
				src={`../../img/${image}.jpg`}
				alt={`${name} Illustration`}
				className='rounded-3xl row-span-2'
			/>
			<div className='flex flex-col justify-center items-center py-8 px-2'>
				<h3 className='font-bold text-lg break-words'>{name}</h3>
				<h4 className='text-xl'>{formatMoney(price)} <span className='text-sm'>USD</span></h4>

				{hasInfoButton
					? (
						<button
							type="button"
							className="text-center py-2 px-4 mt-5 border-t-2 border-b-2 shadow-md border-gray-400 font-bold text-black hover:bg-gray-700 hover:text-white dark:border-t-2 dark:border-b-2 dark:border-yellow-500 dark:text-white rounded-3xl transition-transform duration-300 active:scale-95 dark:hover:bg-yellow-500 dark:hover:text-black"
							onClick={() => {
								handleOpenProductModal()
								handleSetCurrentProduct(product)
							}}
						>
							Product Info
						</button>
					)
					: null}

				{buttonIsAvailable
					? (
						<button
							type="button"
							className="text-center py-2 px-4 mt-5 border-t-2 border-b-2 shadow-md border-gray-400 font-bold text-black hover:bg-gray-700 hover:text-white dark:border-t-2 dark:border-b-2 dark:border-yellow-500 dark:text-white rounded-3xl transition-transform duration-300 active:scale-95 dark:hover:bg-yellow-500 dark:hover:text-black"
							onClick={() => {handleClickMarkProductAsOutOfStock(id)}}
						>
							Mark product as out of stock
						</button>
					)
					: null}
			</div>
		</li>
	)
}

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		price: PropTypes.number,
		image: PropTypes.string
	}),
	hasInfoButton: PropTypes.bool,
	buttonIsAvailable: PropTypes.bool
}