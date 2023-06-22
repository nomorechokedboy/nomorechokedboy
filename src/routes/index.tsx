import { createEffect } from 'solid-js'
import { A, useLocation } from 'solid-start'
import About from '~/sections/About'
import Hero from '~/sections/Hero'
import Projects from '~/sections/Projects'

export default function Home() {
	return (
		<main class='w-full h-full'>
			<Hero />
			<About />
			<Projects />
		</main>
	)
}
