import { Component, For } from 'solid-js'
import { A } from 'solid-start'
import GithubLogo from '~icons/akar-icons/github-outline-fill'
import LinkedInLogo from '~icons/eva/linkedin-outline'
import DevToLogo from '~icons/material-symbols/logo-dev-outline'

type Media = {
	children: Component<{
		class?: string
		width?: number | string
		height?: number | string
	}>
	href: string
}

export default function Media() {
	const media: Media[] = [
		{
			children: LinkedInLogo,
			href: 'https://www.linkedin.com/in/le-ho-hai-duong-8b7382220'
		},
		{
			children: GithubLogo,
			href: 'https://www.github.com/nomorechokedboy'
		},
		{ children: DevToLogo, href: 'https://dev.to/hadius' }
	]
	function renderMediaLink({ children: Icon, href }: Media) {
		return (
			<A class='p-x' href={href} target='_blank'>
				<Icon
					class='text-neutral-500'
					width={24}
					height={24}
				/>
			</A>
		)
	}
	return (
		<div class='flex items-center gap-3'>
			<For each={media}>{renderMediaLink}</For>
		</div>
	)
}
