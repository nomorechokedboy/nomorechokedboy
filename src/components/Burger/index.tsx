import { createSignal, JSX, Signal } from 'solid-js'

type BurgerProps = {
	opened: boolean
	onClick: JSX.EventHandler<HTMLButtonElement, MouseEvent>
}

export default function Burger(props: BurgerProps) {
	return (
		<button class='py-0.5' onClick={props.onClick}>
			<div class='flex flex-col gap-1.5'>
				<div
					class='h-0.5 w-6 relative bg-black dark:bg-white transition duration-300'
					classList={{
						'translate-y-2 rotate-45':
							props.opened
					}}
				/>
				<div
					class='h-0.5 w-6 relative bg-black dark:bg-white transition duration-300'
					classList={{
						'opacity-0': props.opened
					}}
				/>
				<div
					class='h-0.5 w-6 relative bg-black dark:bg-white transition duration-300'
					classList={{
						'-translate-y-2 -rotate-45':
							props.opened
					}}
				/>
			</div>
		</button>
	)
}
