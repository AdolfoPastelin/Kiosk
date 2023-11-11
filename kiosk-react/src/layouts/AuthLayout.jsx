import { Outlet, Link } from "react-router-dom"
import {Slide, ToastContainer} from 'react-toastify'

export default function AuthLayout() {
	return (
		<section className="max-w-4xl m-auto mt-10 mb-10 flex flex-col gap-10 laptop:max-w-6xl laptop:mt-28 laptop:flex-row laptop:px-5">
			<div className="flex flex-col justify-center items-center">
				<Link to="/">
					<h1 className="font-logo capitalize my-0 text-8xl laptop:text-9xl">kiosk</h1>
				</Link>
				<img
					src="../../img/kiosk.png"
					alt="Kiosk"
					className="max-w-md rounded-3xl shadow-xl laptop:max-w-lg"
				/>
			</div>

			<main className="w-full">
				<Outlet />
			</main>

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
		</section>
	)
}