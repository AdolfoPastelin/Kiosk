import { formatMoney } from '../helpers'
import { EditIcon, DeleteIcon } from './Icons'
import { useKiosk } from '../hooks/useKiosk'
import PropTypes from 'prop-types'

export default function ProductSummary({ orderObj }) {
	const { handleEditProductQuantity, handleOpenProductModal, handleDeleteProductFromOrder } = useKiosk()

	return (
		<>
			<li className='flex flex-col gap-3 justify-center items-center'>
				<img
					src={`../../img/${orderObj.image}.jpg`}
					alt={`${orderObj.image} Illustration`}
					className='aspect-square w-4/12 rounded-full'
				/>
				<div className='flex gap-10'>
					<button
						type='button'
						className='p-1 cursor-pointer'
						onClick={() => {
							handleEditProductQuantity(orderObj.id)
							handleOpenProductModal()
						}}>
						<EditIcon />
					</button>

					<button
						type='button'
						className='p-1 cursor-pointer'
						onClick={() => {
							handleDeleteProductFromOrder(orderObj.id)
						}}>
						<DeleteIcon />
					</button>
				</div>

				<h2 className='text-xl text-center mx-auto break-words px-10 -mt-1 font-bold'>{orderObj.name}</h2>
				<h3 className='text-lg -mt-3'>Quantity: {orderObj.productQuantity} = {formatMoney(orderObj.price * orderObj.productQuantity)} <span className='text-sm'>USD</span></h3>
			</li>

			<hr className='my-8 w-full laptop:w-8/12 border border-dashed mx-auto border-gray-700 dark:border-yellow-500' />
		</>
	)
}

ProductSummary.propTypes = {
	orderObj: PropTypes.object
}