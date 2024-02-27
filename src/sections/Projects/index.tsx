import { For } from 'solid-js'
import { A } from 'solid-start'
import A6BlogLogo from '~/assets/a6blog.png'
import AppBorderHover from '~/assets/app-border-hover.svg'
import AppBorder from '~/assets/app-border.svg'
import MarkdownVueIcon from '~/assets/markdown-vue.png'
import SectionHeader from '~/components/SectionHeader'

export default function Projects() {
	const projects = [
		{
			name: 'A6Blog',
			src: A6BlogLogo,
			href: 'https://github.com/nomorechokedboy/a6blog'
		},
		{
			name: 'Markdown Vue',
			src: MarkdownVueIcon,
			href: 'https://github.com/nomorechokedboy/markdown-vue'
		}
	]

	return (
		<section
			class='w-full bg-neutral-50 dark:bg-[#111]'
			id='projects'
		>
			<div class='container py-14 text-center mx-auto'>
				<SectionHeader title='Projects' />
				<div class='grid p-5 grid-cols-2 gap-5 md:grid-cols-4 md:p-10 md:gap-10'>
					<For each={projects}>
						{(project) => (
							<A
								href={
									project.href
								}
								target='_blank'
							>
								<div class='flex flex-col gap-4'>
									<div class='relative group'>
										<img
											src={
												AppBorder
											}
											alt='App Border'
											elementtiming=''
										/>
										<img
											class='absolute inset-0 hidden group-hover:block'
											src={
												AppBorderHover
											}
											alt='App Border Hover'
											elementtiming=''
										/>
										<img
											class='absolute block max-w-full inset-0 py-[2.5%] px-[3.5%] translate-y-[12.5%] aspect-[16/11] w-full dark:bg-white bg-clip-content'
											src={
												project.src
											}
											alt=''
											elementtiming=''
											height={
												211
											}
										/>
									</div>
									<span class='font-normal text-sm md:text-xl text-black dark:text-white text-start'>
										{
											project.name
										}
									</span>
								</div>
							</A>
						)}
					</For>
				</div>
			</div>
		</section>
	)
}
