import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import { Slide, toast } from "react-toastify";
import { useAuth } from '../hooks/useAuth'
import ErrorAlert from "../components/ErrorAlert"

const toastStyles = {
	position: "top-center",
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "colored",
	transition: Slide
}

export default function Login() {
	const emailRef = useRef()
	const passwordRef = useRef()
	const [errors, setErrors] = useState([])
	const { login } = useAuth({
		middleware: 'guest',
		url: '/'
	})

	const handleSubmit = async (event) => {
		event.preventDefault()

		const userData = {
			email: emailRef.current.value,
			password: passwordRef.current.value,
		}

		login(userData, setErrors, toast, toastStyles)
	}

	return (
		<>
			<section className="flex flex-col gap-1 justify-center items-center laptop:gap-2 laptop:mt-3">
				<h1 className="text-5xl font-black">Log in</h1>
				<p className="font-medium text-center text-lg">To create an order, you must log in.</p>
			</section>

			<section className="relative bg-white shadow-lg rouned-md mt-3 mb-28 laptop:mt-12 px-5 py-10 mx-auto max-w-lg dark:bg-transparent border border-gray-100 dark:border-transparent dark:shadow-none dark:mb-20">
				<form onSubmit={handleSubmit} method="POST">
					<article className="flex flex-col gap-5">
						<label
							htmlFor="email"
							className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm font-bold text-xs focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-zinc-500 dark:focus-within:border-yellow-500 dark:focus-within:ring-yellow-500"
						>
							<input
								type="text"
								id="email"
								name="email"
								placeholder="Email"
								className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent placeholder:text-lg font-normal focus:outline-none focus:ring-0 text-lg"
								ref={emailRef}
							/>
							<span
								className="absolute start-3 top-3 -translate-y-1/2 text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-white"
							>
								Email
							</span>
						</label>

						<label
							htmlFor="password"
							className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm font-bold focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-zinc-500 dark:focus-within:border-yellow-500 dark:focus-within:ring-yellow-500"
						>
							<input
								type="password"
								id="password"
								name="password"
								placeholder="Password"
								className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent font-normal focus:outline-none focus:ring-0 text-lg"
								ref={passwordRef}
							/>
							<span
								className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-white"
							>
								Password
							</span>
						</label>
					</article>

					<label htmlFor="submit_login" className="absolute -bottom-20 left-0 right-0 w-2/6 mx-auto cursor-pointer dark:-bottom-10 p-0.5 inline-block rounded-full bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 focus:outline-none focus:ring active:scale-95 dark:bg-gradient-to-r dark:from-yellow-800 dark:via-yellow-500 dark:to-yellow-800">
						<input
							type="submit"
							id="submit_login"
							name="submit_login"
							className="hidden"
							value="Log in"
						/>
						<span className="block rounded-full bg-gradient-to-r from-gray-50 to-gray-200 py-2 text-md font-bold text-center transition-colors duration-75 hover:bg-gradient-to-r hover:from-gray-500 hover:via-gray-300 hover:to-gray-500 hover:text-white dark:hover:text-black dark:from-slate-800 dark:to-gray-800 dark:hover:from-yellow-800 dark:hover:via-yellow-500 dark:hover:to-yellow-800">
							Log in
						</span>
					</label>

					<section className="mt-4">
						{errors
							? errors.map((error, i) => <ErrorAlert key={i}>{error}</ErrorAlert>)
							: null
						}
					</section>
				</form>

				<nav className="absolute -bottom-32 laptop:-bottom-36 dark:-bottom-24 dark:laptop:-bottom-28 w-11/12 flex justify-center gap-1">
					{"Don't have an account?"}
					<Link to='/auth/register'>
						<span className="cursor-pointer font-bold dark:text-yellow-500">
							Create an account
						</span>
					</Link>
				</nav>
			</section>
		</>
	)
}
