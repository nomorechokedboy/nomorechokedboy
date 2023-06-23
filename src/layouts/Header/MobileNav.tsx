import { JSX } from 'solid-js'
import { A } from 'solid-start'
import { NavigationProps } from './Navigation'

export type MobileNavProps = {
	onClick: JSX.EventHandler<HTMLAnchorElement, MouseEvent>
} & NavigationProps

export default function MobileNav(props: MobileNavProps) {
	return (
		<A href={props.href} onClick={props.onClick}>
			<li class='py-3 border-b border-neutral-200'>
				{props.children}
			</li>
		</A>
	)
}
