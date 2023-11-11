import { useAuth } from '../hooks/useAuth'
import { useKiosk } from '../hooks/useKiosk'
import Category from './Category'
import LoadingSpinner from './LoadingSpinner'

export default function Sidebar() {
	const { categories, isLoadingCategories } = useKiosk()
	const { logout, user } = useAuth({ middleware: 'auth' })

	return (
		<>
			<h1 className="hidden text-center font-logo capitalize laptop:block laptop:text-8xl laptop:mt-10">kiosk</h1>

			<img
				src="../img/kiosk.png"
				alt="kiosk"
				className="rounded-b-3xl w-full sm:w-9/12 laptop:hidden laptop:-mt-4 laptop:rounded-br-3xl laptop:rounded-bl-none shadow-lg"
			/>

			<h2 className='text-lg text-center mt-10 laptop:mt-0'>
				Hello,
				<span className='font-bold'>
					{` ${user?.name}`}
				</span>
				! <br /> What&apos;s your choice from our menu today?
			</h2>

			<div className="flex justify-center w-full mt-5">
				<button
					type="button"
					className="text-center bg-red-600 py-2 px-10 text-white font-bold truncate rounded-3xl shadow-2xl dark:shadow-none dark:bg-red-700 hover:scale-105 transition-transform duration-300 active:scale-95"
					onClick={logout}
				>
					Log Out
				</button>
			</div>

			<section className='laptop:mt-0'>
				<h2 className="text-4xl font-black my-5 text-center">Categories</h2>
				<ul className="text-center text-lg grid grid-cols-2 laptop:grid-cols-1">
					{isLoadingCategories ? <LoadingSpinner /> : null}
					{categories.map(category => (
						<Category key={category.id} category={category} />
					))}
				</ul>
			</section>
		</>
	)
}
