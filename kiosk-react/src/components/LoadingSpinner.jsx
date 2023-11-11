export default function LoadingSpinner() {	
	return (
		<div className="grid place-content-center place-items-center m-auto w-[98vw] laptop:w-3/6 laptop:h-1/2">
			<div className="border-8 w-7 h-7 p-4 border-gray-400 border-t-8 rounded-full border-t-gray-700 animate-spin dark:border-yellow-500 dark:border-t-slate-950">

			</div>
		</div>
	)
}