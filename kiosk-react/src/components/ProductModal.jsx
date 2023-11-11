import { useState, useEffect } from 'react'
import Modal from './Modal'
import { useKiosk } from '../hooks/useKiosk'
import { formatMoney } from '../helpers'
import { MinusIcon, PlusIcon } from './Icons'
import PropTypes from 'prop-types'

export default function ProductModal({ isOpen, onClose }) {
	const { currentProduct, handleAddOrder, handleCloseProductModal, order } = useKiosk()
	const [productQuantity, setProductQuantity] = useState(1)

	useEffect(() => {
		if (order.some(orderState => orderState.id === currentProduct.id)) {
			const productEditing = order.filter(orderState => orderState.id === currentProduct.id)[0]
			setProductQuantity(productEditing.productQuantity)
		}
	}, [order, currentProduct.id])

	return (
		<Modal
			hasCloseBtn={true}
			isOpen={isOpen}
			onClose={onClose}
		>
			<article className='grid grid-rows-4 place-items-center gap-5 text-center h-full'>
				<img
					src={`../../img/${currentProduct.image}.jpg`}
					alt={`${currentProduct.name} Product Illustration`}
					className='w-9/12 row-span-2 rounded-3xl laptop:rounded-t-none'
				/>

				<div>
					<h2 className='font-bold text-xl break-words'>{currentProduct.name}</h2>
					<p className='text-base break-words px-4'>{currentProduct.description}</p>
				</div>

				<div className='px-5'>
					<div className='flex items-center justify-center gap-4 -mt-2'>
						<h3>Quantity:</h3>
						<button
							type='button'
							className='p-1'
							onClick={() => {
								if (productQuantity <= 1) return
								setProductQuantity((quantityState) => quantityState - 1)
							}}
						>
							<MinusIcon />
						</button>
						<p className='text-xl'>{productQuantity}</p>
						<button
							type='button'
							onClick={() => {
								if (productQuantity >= 10) return
								setProductQuantity((quantityState) => quantityState + 1)
							}}
							className='p-1'
						>
							<PlusIcon />
						</button>
					</div>

					<div className='flex items-baseline justify-around gap-10 text-xl'>
						<span className='text-base'>
							Price:
						</span>
						<h3 className='flex gap-1 items-baseline'>
							{formatMoney(currentProduct.price * productQuantity)}
							<span className='text-sm'>
								USD
							</span>
						</h3>
					</div>

					<button
						type="button"
						className="text-center py-2 px-4 mt-8 border-t-2 border-b-2 shadow-sm border-gray-400 font-bold text-black hover:bg-gray-700 hover:text-white dark:border-t-2 dark:border-b-2 dark:border-yellow-500 dark:text-white rounded-3xl transition-transform duration-300 active:scale-95 dark:hover:bg-yellow-500 dark:hover:text-black"
						onClick={() => {
							handleAddOrder({ ...currentProduct, productQuantity })
							handleCloseProductModal()
						}}
					>
						Add Product
					</button>
				</div>
			</article>
		</Modal>
	)
}

ProductModal.propTypes = {
	isOpen: PropTypes.bool,
	onClose: PropTypes.func
}