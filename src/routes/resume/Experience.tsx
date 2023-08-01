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
		<div class='text-base'>
			<header class='flex flex-col md:grid md:grid-cols-3 print:grid print:grid-cols-3'>
				<h2>{props.jobTitle}</h2>
				<h2 class='md:text-center print:text-center'>
					{props.company.name}
				</h2>
				<p class='md:text-end print:text-end'>
					{props.startDate} - {props.endDate}
				</p>
			</header>
			<SolidMarkdown
				class={styles.markdown}
				children={props.content}
			/>
		</div>
	)
}
