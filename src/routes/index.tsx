import { createEffect } from 'solid-js'
import { A, useLocation } from 'solid-start'
import Counter from '~/components/Counter'
import { getGitHubUrl } from '../utils'

export default function Home() {
	const location = useLocation()
	const from = location.pathname
	createEffect(() => {
		console.log({ location })
	})

	return (
		<main class='w-full'>
			<section></section>
		</main>
	)
}
