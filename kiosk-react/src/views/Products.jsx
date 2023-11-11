import useSWR from "swr"
import { axiosClient } from "../config/axios"
import Product from "../components/Product"
import LoadingSpinner from "../components/LoadingSpinner"

export default function Products() {

	async function fetcher() {
		const token = localStorage.getItem('AUTH_TOKEN')

		try {
			const { data } = await axiosClient.get('/api/products', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			return data?.data
		} catch (error) {
			throw new Error('The following error has ocurred: ' + error)
		}
	}

	const { data, error, isLoading } = useSWR('/api/products', fetcher, { refreshInterval: 10000 })

	return (
		<section>
			<h1 className="font-black text-4xl mt-8 ml-8 mb-4">Products</h1>
			<p className="text-xl m-8">
				You can manage the product availability from here.
			</p>

			<div className="m-8">
				{error ? <p className="text-red-500">{error}</p> : null}
				{isLoading ? <LoadingSpinner /> : null}

				<ul className="relative grid w-9/12 gap-5 grid-cols-1 mx-auto sm:grid-cols-2 xl:grid-cols-3">
					{data
						? data.map(product => (
							<Product
								key={product.id}
								product={product}
								buttonIsAvailable={true}
							/>
						))
						: null
					}
				</ul>
			</div>
		</section>
	)
}
