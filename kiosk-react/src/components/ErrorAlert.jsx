import PropTypes from 'prop-types'

export default function ErrorAlert({ children }) {
	return (
		<p className='text-red-500 font-bold break-words px-2'>
			{children}
		</p>
	)
}

ErrorAlert.propTypes = {
	children: PropTypes.node
}