import { For } from 'solid-js'
import { AppTheme, themeStore } from '~/stores'
import ComputerIcon from '~icons/ep/monitor'
import SunIcon from '~icons/material-symbols/wb-sunny-outline-rounded'
import MoonIcon from '~icons/ph/moon'
import ThemeButton, { ThemeButtonProps } from './ThemeButton'

export default function ThemeSwitcher() {
	const { setTheme } = themeStore
	const themeButtons: ThemeButtonProps[] = [
		{
			onClick: handleChangeDarkTheme,
			Icon: MoonIcon,
			theme: 'dark'
		},
		{
			onClick: handleChangeLightTheme,
			Icon: SunIcon,
			theme: 'light'
		},
		{
			onClick: handleChangeOsTheme,
			Icon: ComputerIcon,
			theme: 'os'
		}
	]
	function handleChangeLightTheme() {
		setTheme('light')
	}
	function handleChangeDarkTheme() {
		setTheme('dark')
	}
	function handleChangeOsTheme() {
		let theme: AppTheme

		if (window.matchMedia) {
			if (
				window.matchMedia(
					'(prefers-color-scheme: dark)'
				).matches
			) {
				theme = 'dark'
			} else {
				theme = 'light'
			}
		} else {
			theme = 'light'
		}
		setTheme('os')
	}

	return (
		<div class='flex items-center shadow-[0_0_1px_hsla(0,0%,100%,.14)] rounded-3xl gap-2 p-1'>
			<For each={themeButtons}>{ThemeButton}</For>
		</div>
	)
}
