import { JSX, Show } from 'solid-js'

type SectionHeaderProps = {
	title: JSX.Element
	subTitle?: JSX.Element
}

export default function SectionHeader(props: SectionHeaderProps) {
	return (
		<header class='flex flex-col gap-3'>
			<h2 class='font-bold text-center text-5xl text-black dark:text-white'>
				{props.title}
			</h2>
			<Show when={props.subTitle}>
				<p class='font-semibold text-center text-2xl text-neutral-600 dark:text-neutral-400'>
					{props.subTitle}
				</p>
			</Show>
		</header>
	)
}
