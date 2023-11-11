import { useState, useEffect } from "react";
import { KioskContext } from "./KioskContext";
import { Slide, toast } from "react-toastify";
import { axiosClient } from '../config/axios'
import PropTypes from 'prop-types'

const toastStyles = {
	position: "top-center",
	autoClose: 2000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "colored",
	transition: Slide
}
export function KioskProvider({ children }) {
	const [categories, setCategories] = useState([])
	const [currentCategory, setCurrentCategory] = useState({})
	const [isProductModalOpen, setIsProductModalOpen] = useState(false)
	const [currentProduct, setCurrentProduct] = useState({})
	const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order')) ?? [])
	const [total, setTotal] = useState(0)
	const [isLoadingCategories, setIsLoadingCategories] = useState(false)

	useEffect(() => {
		const totalPrice = order.reduce((acc, product) => acc + (product.price * product.productQuantity), 0)
		setTotal(totalPrice)
	}, [order])

	const getCategories = async () => {
		const token = localStorage.getItem('AUTH_TOKEN')
		
		try {
			setIsLoadingCategories(true)
			const { data } = await axiosClient.get('/api/categories', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			setCategories(data?.data)
			setCurrentCategory(data?.data[0])
			setIsLoadingCategories(false)
		} catch (error) {
			throw new Error('An error has ocurred: ' + error)
		}
	}
	
	useEffect(() => {
		getCategories()
	}, [])

	const handleClickCurrentCategory = (id) => {
		const category = categories.filter(category => category.id === id)
		setCurrentCategory(category[0])
	}

	const handleOpenProductModal = () => {
		setIsProductModalOpen(true)
	}

	const handleCloseProductModal = () => {
		setIsProductModalOpen(false)
	}

	const handleSetCurrentProduct = (product) => {
		setCurrentProduct(product)
	}

	const handleAddOrder = ({ ...currentProduct }) => {
		if (order.some(orderState => orderState.id === currentProduct.id)) {
			const updatedOrder = order.map(orderState => {
				return orderState.id === currentProduct.id ? currentProduct : orderState
			})
			setOrder(updatedOrder)
			localStorage.setItem('order', JSON.stringify(updatedOrder))
			toast.success('Product Quantity Edited Successfully', toastStyles)
		} else {
			setOrder([...order, currentProduct])
			localStorage.setItem('order', JSON.stringify([...order, currentProduct]))
			toast.success('Product(s) Added Successfully', toastStyles)
		}
	}

	const handleClearOrder = () => {
		setOrder([])
		localStorage.removeItem('order')
	}

	const handleEditProductQuantity = (id) => {
		const editedProduct = order.filter(product => product.id === id)[0]
		setCurrentProduct(editedProduct)
		localStorage.setItem('order', JSON.stringify(editedProduct))
		handleCloseProductModal()
	}

	const handleDeleteProductFromOrder = (id) => {
		const editedOrder = order.filter(product => product.id !== id)
		setOrder(editedOrder)
		localStorage.setItem('order', JSON.stringify(editedOrder))
		toast.success('Product Deleted Successfully', toastStyles)
	}

	const handleSubmitNewOrder = async () => {
		const token = localStorage.getItem('AUTH_TOKEN')

		try {
			const { data } = await axiosClient.post('/api/orders',
			{
				total,
				products: order.map(order => {
					return {
						id: order.id,
						quantity: order.productQuantity
					}
				})
			},
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			})

			toast.success(data.message)
		} catch(error) {
			toast.error(error)
			throw new Error('The following error has ocurred: ' + error)
		}
	}

	const handleClickCompleteOrder = async (id) => {
		const token = localStorage.getItem('AUTH_TOKEN')

		try {
			await axiosClient.put(`/api/orders/${id}`, null, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
		} catch(error) {
			throw new Error(error)
		}
	}

	const handleClickMarkProductAsOutOfStock = async (id) => {
		const token = localStorage.getItem('AUTH_TOKEN')

		try {
			await axiosClient.put(`/api/products/${id}`, null, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
		} catch(error) {
			throw new Error(error)
		}
	}

	return (
		<KioskContext.Provider
			value={{
				categories,
				currentCategory,
				handleClickCurrentCategory,
				isProductModalOpen,
				handleOpenProductModal,
				handleCloseProductModal,
				currentProduct,
				handleSetCurrentProduct,
				order,
				handleAddOrder,
				handleClearOrder,
				handleEditProductQuantity,
				handleDeleteProductFromOrder,
				total,
				isLoadingCategories,
				handleSubmitNewOrder,
				handleClickCompleteOrder,
				handleClickMarkProductAsOutOfStock
			}}
		>
			{children}
		</KioskContext.Provider>
	)
}

KioskProvider.propTypes = {
	children: PropTypes.object
}