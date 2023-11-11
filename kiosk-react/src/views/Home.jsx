import { useKiosk } from '../hooks/useKiosk'
import { axiosClient } from '../config/axios'
import Product from "../components/Product"
import useSWR from 'swr'
import LoadingSpinner from "../components/LoadingSpinner"

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

export default function Home() {
	const { data, error, isLoading } = useSWR('/api/products', fetcher)
	const { currentCategory } = useKiosk()
	const filteredProducts = data
		? data?.filter(product => product.category_id === currentCategory.id)
		: []

	return (
		<section className='border-b-4 border-t-4 mt-10 mx-auto w-9/12 rounded-3xl border-gray-500 dark:border-yellow-500 laptop:w-full laptop:border-none laptop:mt-0'>
			<div className="text-center mt-10 mb-5">
				<h2 className="text-4xl font-black">Menu</h2>
				<p className="text-xl">Choose and customize your order.</p>
			</div>

			<ul className="grid h-[85vh] overflow-auto p-5 pb-8 gap-5 text-center grid-cols-1 sm:grid-cols-2 laptop:grid-cols-2 2xl:grid-cols-3">
				{error ? <p className="text-red-500">{error}</p> : null}
				{isLoading
					? <div className='grid place-items-center'><LoadingSpinner /></div>
					: filteredProducts?.map(product => (
						<Product 
							key={product.id} 
							product={product} 
							hasInfoButton={true}
						/>
					))}
			</ul>
		</section>
	)
}
