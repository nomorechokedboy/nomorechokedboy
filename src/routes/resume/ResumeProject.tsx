import { For } from 'solid-js'
import { unstable_clientOnly } from 'solid-start'
import Skill from './Skill'
import styles from './styles.module.css'
const SolidMarkdown = unstable_clientOnly(() => import('solid-markdown'))

export type ProjectProps = {
	content: string
	name: string
	repositoryUrl: string
	technologies: string[]
	url: string
}

export default function ResumeProject(props: ProjectProps) {
	return (
		<div class='flex flex-col gap-1'>
			<header class='flex flex-col md:flex-row md:items-center md:justify-between print:flex-row print:items-center print:justify-between'>
				<h2 class='font-bold'>
					<a
						class='underline underline-offset-2 decoration-2 decoration-sky-600 hover:text-blue-600 md:text-center print:text-center'
						href={props.url}
					>
						{props.name}
					</a>
					&nbsp;
					<span class='inline-flex gap-1 items-center'>
						<For each={props.technologies}>
							{(tech) => (
								<Skill>
									{tech}
								</Skill>
							)}
						</For>
					</span>
				</h2>
				<a
					class='text-neutral-600 underline underline-offset-2 decoration-2 decoration-sky-600 hover:text-blue-600 md:text-center print:text-center'
					href={props.repositoryUrl}
				>
					<p>Repository</p>
				</a>
			</header>
			<SolidMarkdown
				class={styles.markdown}
				children={props.content}
			/>
		</div>
	)
}
