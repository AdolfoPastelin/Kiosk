import { useContext } from 'react'
import { KioskContext } from '../context/KioskContext'

export function useKiosk() {
	return useContext(KioskContext)
}