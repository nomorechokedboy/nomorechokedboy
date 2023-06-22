import { For, Signal } from 'solid-js'
import GoLogo from '~/assets/go.png'
import HtmlLogo from '~/assets/html.png'
import KubernetesLogo from '~/assets/kubernetes.png'
import AvatarImage from '~/assets/my-avatar.png'
import NextJsLogo from '~/assets/nextjs.png'
import RustLogo from '~/assets/rust.png'
import SvelteLogo from '~/assets/svelte.png'
import TailwindCssLogo from '~/assets/tailwind.png'
import TsLogo from '~/assets/ts.png'
import Media from '~/components/Media'
import styles from './Hero.module.css'

type Logo = { src: string; alt: string }

function LanguagesAndTechnologies({ alt, src }: Logo) {
	return (
		<img
			class='rounded-full bg-white shadow-[0_0_10px] shadow-black/10 dark:shadow-white/30 max-w-full h-auto'
			width='64'
			height='64'
			src={src}
			alt={alt}
		/>
	)
}

function GradientBackgrounds(_: unknown, i: Signal<number>[0]) {
	const className = `gradientButton${i() + 1}`
	return (
		<span
			class={`absolute top-0 left-0 -z-10 w-full h-full rounded-lg transition ${styles[className]}`}
		/>
	)
}

export default function Hero() {
	const languagesAndTechnologies: Logo[] = [
		{ alt: 'Rust', src: RustLogo },
		{ alt: 'Golang', src: GoLogo },
		{ alt: 'Svelte Kit', src: SvelteLogo },
		{ alt: 'NextJs', src: NextJsLogo },
		{ alt: 'Typescript', src: TsLogo },
		{ alt: 'HTML', src: HtmlLogo },
		{ alt: 'TailwindCss', src: TailwindCssLogo },
		{ alt: 'Kubernetes', src: KubernetesLogo }
	]
	return (
		<section class='w-full'>
			<div class='w-full max-w-screen-2xl flex flex-col gap-5 p-5 md:py-40 lg:px-0 md:mx-auto md:gap-28'>
				<div class='flex flex-col-reverse md:flex-row gap-5'>
					<div class='flex flex-col gap-5 md:flex-1'>
						<h2 class='flex flex-col font-bold select-none text-5xl text-black dark:text-white md:items-center md:flex-row md:gap-3'>
							<div class='flex items-center'>
								<span class='relative block'>
									<p>
										Full
									</p>
									<p
										class={`absolute top-0 left-0 w-full h-full opacity-100 ${styles.textOverlay} ${styles.textOverlay1}`}
									>
										Full
									</p>
								</span>
								<span class='relative block'>
									<p>
										stack
									</p>
									<p
										class={`absolute top-0 left-0 w-full h-full opacity-100 ${styles.textOverlay} ${styles.textOverlay2}`}
									>
										stack
									</p>
								</span>
							</div>
							<span class='relative block h-full'>
								<p>Developer</p>
								<p
									class={`absolute top-0 left-0 w-full h-[67px] opacity-100 ${styles.textOverlay} ${styles.textOverlay3}`}
								>
									Developer
								</p>
							</span>
						</h2>
						<p class='font-medium text-lg text-neutral-600 dark:text-neutral-400'>
							Hi, I’m Le Ho Hai Duong.
							You can call me Marcel.
							<br />A passionate Dev
							based in Binh Duong,
							Viet Nam.
						</p>
						<Media />
						<div>
							<button class='relative rounded-lg text-lg font-medium text-black dark:text-white'>
								<For
									each={Array(
										3
									)}
								>
									{
										GradientBackgrounds
									}
								</For>
								<span class='border border-transparent bg-white dark:bg-neutral-900 hover:bg-transparent hover:text-white w-full h-full block px-10 py-2 bg-clip-padding rounded-lg shadow-[0_4px_4px_0] shadow-white/10'>
									Contact
									me
								</span>
							</button>
						</div>
					</div>
					<div class='flex-1 grid place-items-center'>
						<img
							class='rounded-full bg-gradient-to-tr from-neutral-200 to-neutral-600 max-w-full h-auto'
							src={AvatarImage}
							alt='This is me'
						/>
					</div>
				</div>
				<div class='flex flex-col md:flex-row md:items-center gap-10 md:justify-center font-medium text-lg text-black dark:text-neutral-100'>
					<p>Languages and Technologies</p>
					<hr class='h-0.5 border-t-0 bg-neutral-500 opacity-100 dark:opacity-50 md:h-8 md:w-0.5' />
					<div class='grid grid-cols-4 gap-2 place-items-center md:gap-4 md:grid-cols-8'>
						<For
							each={
								languagesAndTechnologies
							}
						>
							{
								LanguagesAndTechnologies
							}
						</For>
					</div>
				</div>
			</div>
		</section>
	)
}
