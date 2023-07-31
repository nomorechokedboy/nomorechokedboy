import SolidMarkdown from 'solid-markdown'

export type ExperienceProps = {
	company: { name: string; href: string }
	content: string
	endDate: string
	jobTitle: string
	startDate: string
}

export default function Experience(props: ExperienceProps) {
	return (
		<div>
			<div>
				<header>
					<h2>{props.jobTitle}</h2>
					<h2>{props.company.name}</h2>
					<p>
						{props.startDate} -{' '}
						{props.endDate}
					</p>
				</header>
				<div>
					<SolidMarkdown
						children={props.content}
					/>
				</div>
			</div>
		</div>
	)
}
