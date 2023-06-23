import { JSX } from 'solid-js'
import { A } from 'solid-start'

export type NavigationProps = { href: string; children: JSX.Element }

export default function Navigation({ href, children }: NavigationProps) {
	return (
		<li>
			<A href={href}>{children}</A>
		</li>
	)
}
