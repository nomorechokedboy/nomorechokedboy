import Media from './components/Media'
import ThemeSwitcher from './components/ThemeSwitcher'

export default function Footer() {
	return (
		<footer class='p-5 lg:px-0 md:py-10 bg-neutral-50 dark:bg-[#111]'>
			<div class='flex flex-col gap-3 container mx-auto'>
				<section>
					<p class='text-sm text-neutral-500 font-medium dark:text-neutral-600'>
						Copyright © 2023. All rights are
						reserved
					</p>
				</section>
				<section class='flex items-center justify-between'>
					<Media />
					<ThemeSwitcher />
				</section>
			</div>
		</footer>
	)
}
