import { createEffect } from 'solid-js'
import { A, useLocation } from 'solid-start'
import About from '~/sections/About'
import Hero from '~/sections/Hero'

export default function Home() {
	return (
		<main class='w-full h-full'>
			<Hero />
			<About />
		</main>
	)
}
