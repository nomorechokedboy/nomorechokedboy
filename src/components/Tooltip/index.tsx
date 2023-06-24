import { JSX, Show } from 'solid-js'
import styles from './index.module.css'

type TooltipProps = {
	children: JSX.Element
	label: JSX.Element
	withArrow?: boolean
	position?:
		| 'bottom'
		| 'left'
		| 'right'
		| 'top'
		| 'bottom-end'
		| 'bottom-start'
		| 'left-end'
		| 'left-start'
		| 'right-end'
		| 'right-start'
		| 'top-end'
		| 'top-start'
}

export default function Tooltip(props: TooltipProps) {
	const position = styles[props.position ?? 'top']
	return (
		<div class={styles.tooltip}>
			<div
				class={`dark:bg-white bg-[#111827] dark:text-black text-white p-2 ${styles.tooltipContent} ${position} ${styles.show}`}
			>
				{props.label}
			</div>
			<Show when={props.withArrow || false}>
				<div
					class={`border-8 border-transparent border-t-[#111827] shadow dark:border-t-white w-0 h-0 ${styles.tooltipArrow} ${position} ${styles.show}`}
				/>
			</Show>
			{props.children}
		</div>
	)
}
