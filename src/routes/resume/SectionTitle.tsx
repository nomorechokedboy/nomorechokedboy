export type SectionTitleProps = {
	title: string
}

export default function SectionTitle(props: SectionTitleProps) {
	return (
		<header class='flex'>
			<h1 class='text-indigo-950 text-base font-bold'>
				{props.title}
			</h1>
			<hr class='flex-1 h-px bg-gray-200 border-0 self-end' />
		</header>
	)
}
