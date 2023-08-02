import { unstable_clientOnly } from 'solid-start'
import styles from './styles.module.css'
const SolidMarkdown = unstable_clientOnly(() => import('solid-markdown'))

export type ExperienceProps = {
	company: { name: string; href: string }
	content: string
	endDate: string
	jobTitle: string
	startDate: string
}

export default function Experience(props: ExperienceProps) {
	return (
		<div class='text-base print:text-xs'>
			<header class='flex flex-col md:grid md:grid-cols-3 print:grid print:grid-cols-3'>
				<h2 class='font-bold'>{props.jobTitle}</h2>
				<a
					class='text-neutral-600 underline underline-offset-2 decoration-2 decoration-sky-600 hover:text-blue-600 md:text-center print:text-center'
					href={props.company.href}
				>
					<h2 class=''>{props.company.name}</h2>
				</a>
				<p class='md:text-end print:text-end'>
					<i>
						{props.startDate} -{' '}
						{props.endDate}
					</i>
				</p>
			</header>
			<SolidMarkdown
				class={styles.markdown}
				children={props.content}
			/>
		</div>
	)
}
