import { For } from 'solid-js'
import { A, Title } from 'solid-start'
import PhoneIcon from '~icons/basil/phone-solid'
import PortfolioIcon from '~icons/carbon/portfolio'
import LinkedInLogo from '~icons/eva/linkedin-outline'
import HomeIcon from '~icons/ic/round-home'
import DownloadIcon from '~icons/line-md/download-loop'
import EmailIcon from '~icons/mdi/email-outline'
import Certificate, { CertificateProps } from './Certificate'
import Experience, { ExperienceProps } from './Experience'
import ResumeProject, { ProjectProps } from './ResumeProject'
import SectionTitle from './SectionTitle'
import Skill, { SkillProps } from './Skill'
import SkillFragment from './SkillFragment'

export default function Resume() {
	const experiences: ExperienceProps[] = [
		{
			company: {
				name: 'VNPAY',
				href: 'https://vnpay.vn/'
			},
			content: "- Developed a cloud portal website for internal users.\n- Contributed to the development of an admin website for managing cloud users' services usage.\n- Incorporated a Role Based Access Control (RBAC) system to enrich the administrative website.\n- Enacted Passkeys authentication for an internal application, facilitating login without the need for passwords.",
			endDate: 'Now',
			jobTitle: 'Software Engineer',
			startDate: 'Oct 2023'
		},
		{
			company: {
				name: 'Unicloud',
				href: 'https://www.unicloud.com.vn/vi/'
			},
			content: "- Constructed and implemented user interfaces for CMS systems such as STM Controller, Umee pay.\n- Developed and tested modularized ReactJS components using TailwindCSS and Vitest.\n- Implemented a customized, testable and flexible component library for internal use.\n- Optimized images loading approximately 45% by using .webp format, and compressing the images.\n- Improved web applications' lighthouse metrics 20% by identifying heavy assets, components, and loading them lazily. - Built a game platform called Umee game within the Umee ecosystem using ReactJS, and SCSS.\n- Developed landing pages for projects within the Unicloud ecosystem including Bizzone ERP.",
			endDate: 'June 2023',
			jobTitle: 'Frontend Developer',
			startDate: 'June 2022'
		},
		{
			company: {
				name: 'LmssPlus',
				href: 'https://lmssplus.com/'
			},
			content: '- Designed and implemented API endpoints and UI components using ExpressJS, ReactJS.\n- Architectured the system to ensure compatibility between third-party API and system interfaces, enabling loosely coupling between components.\n- Reduced application deployment and testing time by 30% by automating shorter testing and deploy phases using Docker.',
			endDate: 'June 2022',
			jobTitle: 'Collaborator Developer',
			startDate: 'June 2021'
		}
	]
	const projects: ProjectProps[] = [
		{
			content: '- A headless cms written in Go.\n- Enabled dynamic CRUD on database tables and rows.\n - Implemented basic auth and OAuth 2.0 with multiple providers.\n- Supported PostgreSQL, MySQL, SQLite.\n- Developed authorization using RBAC.',
			name: 'FlexiCraft CMS (Work in progress)',
			technologies: [
				'Go',
				'Echo',
				'GORM',
				'Docker',
				'NextJs'
			],
			url: '',
			repositoryUrl:
				'https://github.com/nomorechokedboy/flexicraft-cms'
		},
		{
			content: "- Designed and developed a blog web application with web accessibility (A11y) standards and text-to-speech (TTS) functionality to enhance reading experiences of disabled audiences'.\n- Attained horizontal scalability through using Server-Sent Event (SSE) to enable real-time notifications and Redis pub/sub. This result increases the notification request the server can handle by 50%.\n- Integrated multiple third-party systems authentication such as Github, Google, Twitter, etc, using OAuth.",
			name: 'Accessiblog',
			technologies: ['Go', 'Rust', 'NuxtJs', 'Vercel'],
			url: 'https://a6blog.lehohaiduong.dev/',
			repositoryUrl:
				'https://github.com/nomorechokedboy/a6blog'
		},
		{
			content: '- Prevented 100% of XSS attacks by using an Abstract Syntax Tree (AST) to parse components instead of using v-html or innerHTML.\n- Achieved test coverage of over 90% using Vitest and ensured 100% type safety using Typescript.\n- Developed a universal component that can run on client side rendering (CSR) and server side rendering (SSR) using NuxtJS Module, VueJS, and Vite.',
			name: 'Markdown Vue',
			technologies: ['NuxtJs', 'Vite', 'Vitest', 'Vercel'],
			url: 'https://markdown-vue.lehohaiduong.dev/story/src-runtime-components-vuemarkdown-stories-vue?variantId=src-runtime-components-vuemarkdown-stories-vue-0',
			repositoryUrl:
				'https://github.com/nomorechokedboy/markdown-vue'
		}
	]
	const skills: Record<string, SkillProps[]> = {
		'Languages and Fundamentals': [
			{ children: 'Go' },
			{ children: 'Rust' },
			{ children: 'Typescript' },
			{ children: 'Javascript' },
			{ children: 'Design Pattern' },
			{ children: 'OOP' },
			{ children: 'SOLID' }
		],
		Technologies: [
			{ children: 'GRPC' },
			{ children: 'Fiber' },
			// { children: 'Axum' },
			{ children: 'ExpressJs' },
			{ children: 'PostgreSQL' },
			{ children: 'MongoDB' },
			{ children: 'Redis' },
			{ children: 'NextJs' },
			{ children: 'HTML' },
			{ children: 'CSS' },
			{ children: 'Docker' },
			{ children: 'Kubernetes' },
			{ children: 'Git' },
			{ children: 'Linux' }
		]
	}
	const certificates: CertificateProps[] = [
		{
			certificateName: 'TOEIC 840',
			companyName: 'IIG Vietnam'
		},
		{
			certificateName: 'Software Development With Scrum',
			companyName: 'Axon Active',
			url: 'https://verified.sertifier.com/en/verify/95982156005568/?ref=email'
		},
		{
			certificateName: 'Back End Development and APIs',
			companyName: 'freeCodeCamp',
			url: 'https://freecodecamp.org/certification/fcca31d4e78-6c6b-4311-b95c-0a8655476952/back-end-development-and-apis'
		},
		{
			certificateName: 'Responsive Web Design',
			companyName: 'freeCodeCamp',
			url: 'https://freecodecamp.org/certification/fcca31d4e78-6c6b-4311-b95c-0a8655476952/responsive-web-design'
		}
	]
	function handlePrint() {
		if (typeof window !== 'undefined') {
			window.print()
		}
	}
	return (
		<>
			<Title>LeHoHaiDuong-Resume</Title>
			<main
				class='p-5 lg:p-32 flex flex-col gap-3 last:break-after-auto'
				id='resume'
			>
				<div class='print:hidden'>
					<button
						class='bg-neutral-900 px-5 py-2 rounded-lg dark:bg-white active:translate-y-1'
						onClick={handlePrint}
					>
						<div class='flex items-center gap-2 justify-center text-white dark:text-neutral-950'>
							<DownloadIcon
								width='24'
								height='24'
							/>
							<span class='text-lg font-medium'>
								Download My
								Resume
							</span>
						</div>
					</button>
				</div>
				<header class='flex flex-col md:justify-between md:flex-row print:justify-between print:flex-row'>
					<h1 class='text-indigo-950 text-2xl font-semibold md:self-center lg:text-5xl print:text-2xl print:self-center'>
						Le Ho Hai Duong
					</h1>
					<nav class='flex flex-col md:gap-5 md:self-end md:items-center md:flex-row print:gap-5 print:self-end print:items-center print:flex-row print:text-xs'>
						<a
							class='inline-flex items-center gap-1 text-neutral-600 underline underline-offset-2 decoration-2 decoration-sky-600 hover:text-blue-600'
							target='_blank'
							href='mailto:lehohaiduong2001@gmail.com'
						>
							<EmailIcon />
							<span>
								lehohaiduong2001@gmail.com
							</span>
						</a>
						<a
							class='inline-flex items-center gap-1 text-neutral-600 underline underline-offset-2 decoration-2 decoration-sky-600 hover:text-blue-600'
							target='_blank'
							href='tel:+84784120178'
						>
							<PhoneIcon />
							<span>
								+84 784 120 178
							</span>
						</a>
						<a
							class='inline-flex items-center gap-1 text-neutral-600 underline underline-offset-2 decoration-2 decoration-sky-600 hover:text-blue-600'
							target='_blank'
							href='https://www.linkedin.com/in/le-ho-hai-duong-8b7382220/'
						>
							<LinkedInLogo />
							<span>Linkedin</span>
						</a>
						<a
							class='inline-flex items-center gap-1 text-neutral-600 underline underline-offset-2 decoration-2 decoration-sky-600 hover:text-blue-600'
							target='_blank'
							href='https://www.lehohaiduong.dev'
						>
							<PortfolioIcon />
							<span>Porfolio</span>
						</a>
					</nav>
				</header>
				<section
					class='flex flex-col gap-3'
					id='skills'
				>
					<SectionTitle title='Skills' />
					<div class='flex flex-col gap-2'>
						<For each={Object.keys(skills)}>
							{(key) => {
								return (
									<SkillFragment
										skills={
											skills[
												key
											]
										}
									>
										{
											key
										}
									</SkillFragment>
								)
							}}
						</For>
					</div>
				</section>
				<section
					class='flex flex-col gap-3'
					id='experience'
				>
					<SectionTitle title='Experience' />
					<div class='flex flex-col gap-2'>
						<For each={experiences}>
							{Experience}
						</For>
					</div>
				</section>
				<section
					class='flex flex-col gap-3'
					id='projects'
				>
					<SectionTitle title='Projects' />
					<div class='flex flex-col gap-2 print:text-xs'>
						<For each={projects}>
							{ResumeProject}
						</For>
					</div>
				</section>
				<section
					class='flex flex-col gap-3 print:text-xs'
					id='education'
				>
					<SectionTitle title='Education' />
					<div class='flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:items-center print:grid print:grid-rows-2 print:grid-cols-2 print:items-center print:text-xs'>
						<p>
							<strong>
								Ho Chi Minh
								University of
								Technology and
								Education
							</strong>
						</p>
						<p class='justify-self-end'>
							<i>
								Sep 2019 - Sep
								2023
							</i>
						</p>
						<p>Bachelor of Engineering</p>
						<p class='justify-self-end'>
							<strong>GPA</strong>:
							3.07/4.0
						</p>
					</div>
				</section>
				<section
					class='flex flex-col gap-3 print:text-xs'
					id='certificates'
				>
					<SectionTitle title='Certificates' />
					<div class='flex flex-col gap-2 lg:flex-row lg:justify-between lg:gap-0 print:flex-row print:justify-between print:gap-0'>
						<For each={certificates}>
							{Certificate}
						</For>
					</div>
				</section>
			</main>
			<div class='print:hidden fixed bottom-5 right-5 p-3 bg-black rounded-full'>
				<A href='/'>
					<HomeIcon
						class='text-white'
						width='24'
						height='24'
					/>
				</A>
			</div>
		</>
	)
}
