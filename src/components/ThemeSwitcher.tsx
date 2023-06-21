import { themeStore } from '~/stores'
import ComputerIcon from '~icons/ep/monitor'
import SunIcon from '~icons/material-symbols/wb-sunny-outline-rounded'
import MoonIcon from '~icons/ph/moon'

export default function ThemeSwitcher() {
	const { theme, setTheme } = themeStore
	function handleChangeLightTheme() {
		setTheme('light')
	}
	function handleChangeDarkTheme() {
		setTheme('dark')
	}
	function handleChangeOsTheme() {
		setTheme('os')
	}

	return (
		<div class='flex items-center shadow-[0_0_1px_hsla(0,0%,100%,.14)] rounded-3xl gap-2 p-1'>
			<button
				class='w-8 h-8 rounded-full grid place-items-center text-[#666] dark:text-white'
				classList={{
					'bg-[#f2f2f2] dark:bg-[#1a1a1a]':
						theme() === 'dark'
				}}
				onClick={handleChangeDarkTheme}
			>
				<MoonIcon />
			</button>
			<button
				class='w-8 h-8 rounded-full grid place-items-center text-[#666] dark:text-white'
				classList={{
					'bg-[#f2f2f2] dark:bg-[#1a1a1a]':
						theme() === 'light'
				}}
				onClick={handleChangeLightTheme}
			>
				<SunIcon />
			</button>
			<button
				class='w-8 h-8 rounded-full grid place-items-center text-[#666] dark:text-white'
				classList={{
					'bg-[#f2f2f2] dark:bg-[#1a1a1a]':
						theme() === 'os'
				}}
				onClick={handleChangeOsTheme}
			>
				<ComputerIcon />
			</button>
		</div>
	)
}
