import Tooltip from '~/components/Tooltip'

export type LanguageAndTechnologyProps = { src: string; alt: string }

export default function LanguagesAndTechnologies(
	props: LanguageAndTechnologyProps
) {
	return (
		<Tooltip label={props.alt} position='top' withArrow>
			<figure class='rounded-full overflow-hidden bg-white shadow-[0_0_10px] shadow-black/10 dark:shadow-white/30'>
				<img
					class='max-w-full h-auto transition hover:scale-150'
					width='64'
					height='64'
					src={props.src}
					alt={props.alt}
				/>
			</figure>
		</Tooltip>
	)
}
