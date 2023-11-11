import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export default function AdminSidebar() {
	const { logout } = useAuth({ middleware: 'auth' })

	return (
		<aside className="md:w-64">
			<header className="mb-8">
				<h1 className="text-center font-logo capitalize text-8xl mt-10">kiosk</h1>
				<img
					src="../img/kiosk.png"
					alt="kiosk"
					className="rounded-3xl shadow-lg mx-auto w-9/12"
				/>
			</header>
			<nav className="flex flex-col justify-center items-center gap-5 text-2xl font-bold">
				<Link to='/admin' className="hover:underline hover:underline-offset-8 hover:dark:text-yellow-500 hover:dark:no-underline">Orders</Link>
				<Link to='/admin/products' className="hover:underline hover:underline-offset-8 hover:dark:text-yellow-500 hover:dark:no-underline">Products</Link>
			</nav>
			<div className="flex justify-center w-full mt-8">
				<button
					type="button"
					className="text-center bg-red-600 py-2 px-10 text-white font-bold truncate rounded-3xl shadow-2xl dark:shadow-none dark:bg-red-700 hover:scale-105 transition-transform duration-300 active:scale-95"
					onClick={logout}
				>
					Log Out
				</button>
			</div>
		</aside>
	)
}
