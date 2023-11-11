import { useState } from 'react'
import { useDarkSide } from '../hooks/useDarkSide'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function Switcher() {
	const [setTheme, colorTheme] = useDarkSide()
	const [darkSide, setDarkSide] = useState(colorTheme === 'dark' ? true : false)

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme)
		setDarkSide(checked)
	}

	return (
		<>
			<DarkModeSwitch 
				checked={darkSide}
				onChange={toggleDarkMode} 
				size={45}
				moonColor='yellow'
				sunColor='orange'
				style={{
					position: 'absolute',
					top: '12px',
					right: '12px',
					strokeWidth: "1",
					strokeOpacity: "1",
					background: "#0f172a",
					borderRadius: "100%",
					padding: "5px"
				}}
			/>
		</>
	)
}