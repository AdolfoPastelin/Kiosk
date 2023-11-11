import { Outlet } from 'react-router-dom'
import { useKiosk } from '../hooks/useKiosk'
import Sidebar from '../components/Sidebar'
import Summary from '../components/Summary'
import ProductModal from '../components/ProductModal'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Layout() {
	const { isProductModalOpen, handleCloseProductModal } = useKiosk()

	return (
		<>
			<section className='grid grid-cols-1 h-[90vh] place-items-center place-content-start laptop:grid-cols-4'>
				<aside className='laptop:order-last grid place-items-center laptop:block'>
					<Sidebar />
				</aside>

				<main className='col-span-2'>
					<Outlet />
				</main>

				<aside className='laptop:order-first flex flex-col h-full w-full pt-10 laptop:overflow-y-scroll'>
					<Summary />
				</aside>
			</section>

			<ProductModal
				isOpen={isProductModalOpen}
				onClose={handleCloseProductModal}
			/>

			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
				transition={Slide}
			/>
		</>
	)
}