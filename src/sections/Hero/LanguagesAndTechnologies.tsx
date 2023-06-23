export default function LanguagesAndTechnologies(props: Logo) {
	return (
		<img
			class='rounded-full bg-white shadow-[0_0_10px] shadow-black/10 dark:shadow-white/30 max-w-full h-auto'
			width='64'
			height='64'
			src={props.src}
			alt={props.alt}
		/>
	)
}
