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
		<main class='text-center mx-auto text-gray-700 p-4'>
			<h1 class='max-6-xs text-6xl text-sky-700 font-thin uppercase my-16'>
				Hello world!
			</h1>
			<Counter />
			<p class='mt-8'>
				Visit{' '}
				<a
					href='https://solidjs.com'
					target='_blank'
					class='text-sky-600 hover:underline'
				>
					solidjs.com
				</a>{' '}
				to learn how to build Solid apps.
			</p>
			<a href={getGitHubUrl(from)}>
				<button class='p-4 bg-black text-white'>
					GitHub
				</button>
			</a>
			<p class='my-4'>
				<span>Home</span>
				{' - '}
				<A
					href='/about'
					class='text-sky-600 hover:underline'
				>
					About Page
				</A>{' '}
			</p>
		</main>
	)
}
