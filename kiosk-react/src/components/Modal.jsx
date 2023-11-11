import { useRef, useState, useEffect } from 'react'
import { CloseIcon } from './Icons'
import PropTypes from 'prop-types'

export default function Modal({ isOpen, hasCloseBtn = true, onClose, children }) {
	const [isModalOpen, setIsModalOpen] = useState(isOpen)
	const modalRef = useRef(null)

	const handleCloseModal = () => {
		if (onClose) {
			onClose()
		}

		setIsModalOpen(false)
	}

	const handleEscapeKeyDown = (event) => {
		if (event.key === 'Escape') {
			handleCloseModal()
		}
	}

	useEffect(() => {
		setIsModalOpen(isOpen)
	}, [isOpen])

	useEffect(() => {
		const modalElement = modalRef.current

		if (modalElement) {
			if (isModalOpen) {
				modalElement.showModal()
			} else {
				modalElement.close()
			}
		}
	}, [isModalOpen])

	return (
		<dialog
			ref={modalRef}
			onKeyDown={handleEscapeKeyDown}
			className='absolute w-96 h-full laptop:h-5/6 rounded-3xl overflow-hidden text-black bg-gradient-to-r from-gray-50 to-gray-200 
			shadow-inner border-double border-2 border-gray-700 backdrop:bg-gray-900 backdrop:opacity-70 dark:text-white dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-900 dark:shadow-none dark:border-2 dark:border-yellow-500'
		>
			{hasCloseBtn && (
				<button
					className='absolute right-0 p-3 hover:rotate-90 transition-transform duration-500'
					onClick={handleCloseModal}
				>
					<CloseIcon/>
				</button>
			)}
			{children}
		</dialog>
	)
}

Modal.propTypes = {
	isOpen: PropTypes.bool,
	hasCloseBtn: PropTypes.bool,
	onClose: PropTypes.func,
	children: PropTypes.node
}