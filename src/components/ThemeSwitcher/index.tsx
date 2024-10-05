import { createEffect, createSignal, For, onMount } from 'solid-js'
import { AppTheme } from '~/stores'
import { applyTheme } from '~/utils'
import ComputerIcon from '~icons/ep/monitor'
import SunIcon from '~icons/material-symbols/wb-sunny-outline-rounded'
import MoonIcon from '~icons/ph/moon'
import ThemeButton, { ThemeButtonProps } from './ThemeButton'

export default function ThemeSwitcher() {
	const [theme, setTheme] = createSignal<AppTheme>('none')
	const themeButtons: () => ThemeButtonProps[] = () => [
		{
			onClick: handleChangeDarkTheme,
			Icon: MoonIcon,
			isActive: theme() === 'dark'
		},
		{
			onClick: handleChangeLightTheme,
			Icon: SunIcon,
			isActive: theme() === 'light'
		},
		{
			onClick: handleChangeOsTheme,
			Icon: ComputerIcon,
			isActive: theme() === 'os'
		}
	]
	const updateTheme = (newTheme: AppTheme) => {
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
		applyTheme(newTheme)
	}
	function handleChangeLightTheme() {
		updateTheme('light')
	}
	function handleChangeDarkTheme() {
		updateTheme('dark')
	}
	function handleChangeOsTheme() {
		updateTheme('os')
	}

	onMount(() => {
		const loadedTheme = localStorage.getItem('theme') || 'os'
		setTheme(loadedTheme as AppTheme)
	})

	createEffect(() => {
		const mediaQuery = window.matchMedia(
			'(prefers-color-scheme: dark)'
		)
		const handleChange = () => {
			if (theme() === 'os') {
				applyTheme('system')
			}
		}
		mediaQuery.addEventListener('change', handleChange)
		return () =>
			mediaQuery.removeEventListener('change', handleChange)
	})

	return (
		<div class='flex items-center shadow-[0_0_1px_hsla(0,0%,100%,.14)] rounded-3xl gap-2 p-1'>
			<For each={themeButtons()}>{ThemeButton}</For>
		</div>
	)
}
