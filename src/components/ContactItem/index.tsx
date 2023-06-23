import { Component, JSX } from 'solid-js'

type ContactItemProps = {
	Icon: Component
	title: JSX.Element
	content: JSX.Element
	href: string
}

export default function ContactItem(props: ContactItemProps) {
	return (
		<a href={props.href}>
			<div class='flex items-center gap-3'>
				<div class='rounded-full p-5 bg-white shadow-[0_0_10px] shadow-black/10 dark:shadow-white/30'>
					<props.Icon />
				</div>
				<div class='flex flex-col text-lg'>
					<h3 class='text-black font-semibold dark:text-white'>
						{props.title}
					</h3>
					<p class='font-normal text-neutral-600 dark:text-neutral-400'>
						{props.content}
					</p>
				</div>
			</div>
		</a>
	)
}
