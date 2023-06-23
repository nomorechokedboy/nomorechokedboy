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
		<A class='p-x' href={props.href} target='_blank'>
			<props.children
				class='text-neutral-500'
				width={24}
				height={24}
			/>
		</A>
	)
}
