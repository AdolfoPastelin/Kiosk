import AdminSidebar from "../components/AdminSidebar"
import { Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export default function AdminLayout() {
	useAuth({ middleware: 'admin' })

	return (
		<section className='md:flex'>
			<div className="md:border-r-2 border-dashed md:border-gray-500 md:dark:border-yellow-500">
				<AdminSidebar />
			</div>

			<main>
				<Outlet />
			</main>
		</section>
	)
}
