import { JSX } from 'solid-js'
import { A } from 'solid-start'

export type NavigationProps = { href: string; children: JSX.Element }

export default function Navigation(props: NavigationProps) {
	return (
		<li>
			<A href={props.href}>{props.children}</A>
		</li>
	)
}
