import { Component, JSX } from 'solid-js'
import { AppTheme, themeStore } from '~/stores'

export type ThemeButtonProps = {
	Icon: Component
	theme: AppTheme
	onClick: JSX.EventHandler<HTMLButtonElement, MouseEvent>
}

export default function ThemeButton(props: ThemeButtonProps) {
	const { theme } = themeStore
	return (
		<button
			class='w-8 h-8 rounded-full grid place-items-center text-[#666] transition dark:text-white active:translate-y-1'
			classList={{
				'bg-[#f2f2f2] dark:bg-[#1a1a1a]':
					theme() === props.theme
			}}
			onClick={props.onClick}
		>
			<props.Icon />
		</button>
	)
}
