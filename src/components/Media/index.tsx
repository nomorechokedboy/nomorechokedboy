import { For } from 'solid-js'
import GithubLogo from '~icons/akar-icons/github-outline-fill'
import LinkedInLogo from '~icons/eva/linkedin-outline'
import DevToLogo from '~icons/material-symbols/logo-dev-outline'
import MediaLink, { MediaLinkProps } from './MediaLink'

export default function Media() {
	const media: MediaLinkProps[] = [
		{
			children: LinkedInLogo,
			href: 'https://www.linkedin.com/in/le-ho-hai-duong-8b7382220',
			title: 'Linkedin'
		},
		{
			children: GithubLogo,
			href: 'https://www.github.com/nomorechokedboy',
			title: 'Github'
		},
		{
			children: DevToLogo,
			href: 'https://dev.to/hadius',
			title: 'Dev.to'
		}
	]
	return (
		<div class='flex items-center gap-3'>
			<For each={media}>{MediaLink}</For>
		</div>
	)
}
