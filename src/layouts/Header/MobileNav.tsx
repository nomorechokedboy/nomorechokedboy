import { JSX } from 'solid-js'
import { A } from 'solid-start'
import { NavigationProps } from './Navigation'

export type MobileNavProps = {
	onClick: JSX.EventHandler<HTMLLIElement, MouseEvent>
} & NavigationProps

export default function MobileNav({ href, children, onClick }: MobileNavProps) {
	return (
		<li class='py-3 border-b border-neutral-200' onClick={onClick}>
			<A href={href}>{children}</A>
		</li>
	)
}
