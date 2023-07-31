import { For } from 'solid-js'
import Experience from './Experience'
import SectionTitle from './SectionTitle'

export default function Resume() {
	const experiences = [
		{
			jobTitle: 'Frontend Developer',
			company: { name: 'Unicloud', href: '' },
			startDate: 'Sep 2022',
			endDate: 'June 2023',
			content: "- Constructed and implemented user interfaces for CMS systems such as STM Controller, Umee pay.\n- Developed and tested modularized ReactJS components using TailwindCSS and Vitest.\n- Implemented a customized, testable and flexible component library for internal use.\n- Optimized images loading approximately 45% by using .webp format, and compressing the images.\n- Improved web applications' lighthouse metrics 20% by identifying heavy assets, components, and loading them lazily."
		}
	]
	return (
		<main class='p-5 lg:p-32 flex flex-col gap-3' id='resume'>
			<header class='flex flex-col md:justify-between md:flex-row'>
				<h1 class='text-indigo-950 text-2xl font-bold md:self-center lg:text-5xl'>
					Le Ho Hai Duong
				</h1>
				<nav class='flex flex-col md:gap-5 md:self-end md:items-center md:flex-row'>
					<div>lehohaiduong2001@gmail.com</div>
					<div>+84 784 120 178</div>
					<div>Linkedin</div>
					<div>Github</div>
					<div>Portfolio</div>
				</nav>
			</header>
			<section id=''>
				<SectionTitle title='Experience' />
				<For each={experiences}>{Experience}</For>
			</section>
		</main>
	)
}
