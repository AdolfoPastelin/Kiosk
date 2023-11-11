import { useKiosk } from '../hooks/useKiosk'
import { formatMoney } from '../helpers'
import ProductSummary from './ProductSummary'

export default function Summary() {
	const { order, total, handleSubmitNewOrder, handleClearOrder } = useKiosk()

	const handleSubmit = (event) => {
		event.preventDefault()

		handleSubmitNewOrder()
		handleClearOrder()
	}
	
	return (
		<>
			<h1 className='text-center font-black text-4xl'>
				Order
			</h1>
			<p className='text-xl text-center'>Verify your order details.</p>

			<div className='mt-10 px-5 flex flex-col justify-center items-center'>
				{
					order.length === 0
						? (
							<p
								className='text-xl text-center font-bold laptop:mb-10'
							>
								There are no elements in your order yet.
							</p>
						)
						: (
							<ul>
								{order.map(orderObj => (
									<ProductSummary key={orderObj.id} orderObj={orderObj} />
								))}
							</ul>
						)
				}

				<div className='mt-5 laptop:mt-0'>
					<p className='font-bold text-right text-2xl'>
						Total: {formatMoney(total)}
						<span className='font-normal text-sm ml-1'>
							USD
						</span>
					</p>
				</div>

				<form onSubmit={handleSubmit}>
					<div className='mt-5 py-3 laptop:mt-4'>
						<input
							type="submit"
							value="Confirm Order"
							className="text-center cursor-pointer py-2 px-4 border-t-2 border-b-2 shadow-md border-gray-400 font-bold text-black hover:bg-gray-700 hover:text-white dark:border-t-2 dark:border-b-2 dark:border-yellow-500 dark:text-white rounded-3xl transition-transform duration-300 active:scale-95 dark:hover:bg-yellow-500 dark:hover:text-black
							disabled:cursor-not-allowed disabled:shadow-inner disabled:grayscale disabled:hover:bg-transparent disabled:hover:text-black dark:disabled:hover:bg-transparent dark:disabled:hover:text-white"
							disabled={order.length === 0}
						/>
					</div>
				</form>
			</div>
		</>
	)
}
