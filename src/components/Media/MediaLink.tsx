import { Component } from 'solid-js'
import { A } from 'solid-start'

export type MediaLinkProps = {
	children: Component<{
		class?: string
		width?: number | string
		height?: number | string
	}>
	href: string
}

export default function MediaLink(props: MediaLinkProps) {
	return (
		<A href={props.href} target='_blank'>
			<button class='p-x active:translate-y-1'>
				<props.children
					class='text-neutral-500'
					width={24}
					height={24}
				/>
			</button>
		</A>
	)
}
