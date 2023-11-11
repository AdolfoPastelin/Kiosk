import useSWR from "swr"
import { axiosClient } from "../config/axios"
import { formatMoney } from '../helpers/index'
import { useKiosk } from "../hooks/useKiosk"
import LoadingSpinner from "../components/LoadingSpinner"

export default function Orders() {
	const token = localStorage.getItem('AUTH_TOKEN')

	const fetcher = () => axiosClient.get('/api/orders', {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	const { data, error, isLoading } = useSWR('/api/orders', fetcher)
	const { handleClickCompleteOrder } = useKiosk()

	return (
		<section>
			<h1 className="font-black text-4xl pt-8 pl-8 pb-4">Orders</h1>
			<p className="text-xl ml-8">
				You can manage the received orders from here
			</p>

			<div className="grid grid-cols-1 gap-10 p-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
				{error ? <p className="text-red-500">{error}</p> : null}
				{isLoading
					? <LoadingSpinner />
					: data?.data?.data.map(order => (
						<div key={order.id} className="relative pb-20 w-10/12 md:w-full mx-auto p-5 space-y-2 border-x border-t border-gray-500 shadow-lg rounded-t-3xl rounded-b-3xl dark:shadow-none dark:border-yellow-500">
							<div className="flex flex-col gap-5 mb-5">
								<p className="text-xl font-bold text-center dark:text-yellow-500">
									Order Content
								</p>
								<p className="text-center font-bold">Client: <span className="font-normal">{order.user.name}</span></p>
							</div>

							<ul className="pb-5">
								{order.products.map(product => (
									<li
										key={product.id}
										className="border-b border-gray-500 last-of-type:border-none py-4 dark:border-yellow-500"
									>

										<div className="flex flex-col">
											<p><span className="font-bold">Product ID:</span> #{product.id} - {product.name}</p>
											<p><span className="font-bold">Quantity:</span> {product.pivot.quantity}</p>
										</div>

									</li>
								))}

							</ul>

							<p className="absolute bottom-12 left-0 right-0 text-center font-bold text-lg">
								Total: <span className="font-normal">{formatMoney(order.total)}</span>
							</p>

							<label htmlFor={`complete_btn_${order.id}`} className="absolute bottom-0 left-0 right-0 cursor-pointer p-0.5 inline-block rounded-full bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 focus:outline-none focus:ring active:scale-95 dark:bg-gradient-to-r dark:from-yellow-800 dark:via-yellow-500 dark:to-yellow-800">
								<input
									type="button"
									id={`complete_btn_${order.id}`}
									name={`complete_btn_${order.id}`}
									className="hidden"
									value="Complete Order"
									onClick={() => handleClickCompleteOrder(order.id)}
								/>
								<span className="block rounded-full bg-gradient-to-r from-gray-50 to-gray-200 py-2 text-md font-bold text-center transition-colors duration-75 hover:bg-gradient-to-r hover:from-gray-500 hover:via-gray-300 hover:to-gray-500 hover:text-white dark:hover:text-black dark:from-slate-800 dark:to-gray-800 dark:hover:from-yellow-800 dark:hover:via-yellow-500 dark:hover:to-yellow-800">
									Complete Order
								</span>
							</label>
						</div>
					))}
			</div>
		</section>
	)
}
